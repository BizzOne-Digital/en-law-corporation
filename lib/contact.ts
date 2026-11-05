export const legalMatters = [
  "Divorce",
  "Separation Agreement",
  "Child Access",
  "Child Support",
  "Spousal Support",
  "Other",
] as const;

export const contactMethods = ["Phone", "Email"] as const;

export type ContactValues = {
  fullName: string;
  email: string;
  phone: string;
  legalMatter: string;
  message: string;
  contactMethod: string;
  acknowledged: boolean;
};

export type ContactErrors = Partial<Record<keyof ContactValues, string>>;

/** Shared by the browser form and the API route so the rules cannot drift apart. */
export function validateContact(v: ContactValues): ContactErrors {
  const errors: ContactErrors = {};
  const phoneDigits = v.phone.replace(/\D/g, "");

  if (v.fullName.trim().length < 2) errors.fullName = "Please enter your full name.";
  else if (v.fullName.length > 120) errors.fullName = "Please shorten your name.";

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim()) || v.email.length > 200)
    errors.email = "Please enter a valid email address.";

  if (v.phone.trim() && (phoneDigits.length < 10 || phoneDigits.length > 15))
    errors.phone = "Please enter a valid phone number, including area code.";
  else if (!v.phone.trim() && v.contactMethod === "Phone")
    errors.phone = "Please enter a phone number so we can call you.";

  if (!(legalMatters as readonly string[]).includes(v.legalMatter))
    errors.legalMatter = "Please select a legal matter.";

  if (v.message.trim().length < 10)
    errors.message = "Please add a brief description (at least 10 characters).";
  else if (v.message.length > 3000) errors.message = "Please keep your message under 3,000 characters.";

  if (!(contactMethods as readonly string[]).includes(v.contactMethod))
    errors.contactMethod = "Please choose how you would like to be contacted.";

  if (v.acknowledged !== true) errors.acknowledged = "Please confirm that you understand this statement.";

  return errors;
}
