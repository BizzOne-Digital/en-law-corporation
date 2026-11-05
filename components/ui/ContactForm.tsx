"use client";

import { CircleCheck } from "lucide-react";
import { useRef, useState } from "react";
import { ButtonArrow, buttonClass } from "@/components/ui/Button";
import {
  contactMethods,
  legalMatters,
  validateContact,
  type ContactErrors,
  type ContactValues,
} from "@/lib/contact";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const empty: ContactValues = {
  fullName: "",
  email: "",
  phone: "",
  legalMatter: "",
  message: "",
  contactMethod: "Email",
  acknowledged: false,
};

const inputClass =
  "mt-2 block min-h-12 w-full rounded-lg border bg-white px-4 py-3 text-base text-ink transition-colors focus:border-navy";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 text-sm font-medium text-[#B3261E]">
      {message}
    </p>
  );
}

const Required = () => (
  <span className="text-[#B3261E]" aria-hidden="true">
    {" "}
    *
  </span>
);

export function ContactForm() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "failed">("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const honeypot = useRef<HTMLInputElement>(null);

  function update<K extends keyof ContactValues>(key: K, value: ContactValues[K]) {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  const describe = (key: keyof ContactValues) => ({
    "aria-invalid": errors[key] ? true : undefined,
    "aria-describedby": errors[key] ? `${key}-error` : undefined,
  });
  const border = (key: keyof ContactValues) => (errors[key] ? "border-[#B3261E]" : "border-line");

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    const found = validateContact(values);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, website: honeypot.current?.value ?? "" }),
      });
      if (!response.ok) throw new Error(String(response.status));
      setStatus("sent");
      setValues(empty);
    } catch {
      setStatus("failed");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-xl border border-line bg-mist p-8 text-center">
        <CircleCheck className="mx-auto size-10 text-gold-deep" aria-hidden="true" />
        <h3 className="mt-4 font-serif text-2xl font-semibold text-navy">Thank you</h3>
        <p className="mt-2 leading-relaxed text-slate">
          Your request has been sent. We will contact you using your preferred method.
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-5">
      <p className="text-sm text-slate">
        Fields marked <span className="text-[#B3261E]">*</span> are required.
      </p>

      <div>
        <label htmlFor="fullName" className="text-sm font-semibold text-navy">
          Full Name
          <Required />
        </label>
        <input
          id="fullName"
          name="fullName"
          autoComplete="name"
          required
          value={values.fullName}
          onChange={(e) => update("fullName", e.target.value)}
          className={cn(inputClass, border("fullName"))}
          {...describe("fullName")}
        />
        <FieldError id="fullName-error" message={errors.fullName} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="text-sm font-semibold text-navy">
            Email
            <Required />
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            className={cn(inputClass, border("email"))}
            {...describe("email")}
          />
          <FieldError id="email-error" message={errors.email} />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-semibold text-navy">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={cn(inputClass, border("phone"))}
            {...describe("phone")}
          />
          <FieldError id="phone-error" message={errors.phone} />
        </div>
      </div>

      <div>
        <label htmlFor="legalMatter" className="text-sm font-semibold text-navy">
          Legal Matter
          <Required />
        </label>
        <select
          id="legalMatter"
          name="legalMatter"
          required
          value={values.legalMatter}
          onChange={(e) => update("legalMatter", e.target.value)}
          className={cn(inputClass, border("legalMatter"))}
          {...describe("legalMatter")}
        >
          <option value="">Select a legal matter</option>
          {legalMatters.map((matter) => (
            <option key={matter}>{matter}</option>
          ))}
        </select>
        <FieldError id="legalMatter-error" message={errors.legalMatter} />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-semibold text-navy">
          Message
          <Required />
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          className={cn(inputClass, border("message"))}
          {...describe("message")}
        />
        <FieldError id="message-error" message={errors.message} />
      </div>

      <fieldset>
        <legend className="text-sm font-semibold text-navy">Preferred Contact Method</legend>
        <div className="mt-2 flex flex-wrap gap-6">
          {contactMethods.map((method) => (
            <label key={method} className="flex min-h-11 items-center gap-2.5 text-ink">
              <input
                type="radio"
                name="contactMethod"
                value={method}
                checked={values.contactMethod === method}
                onChange={() => update("contactMethod", method)}
                className="size-5 accent-navy"
              />
              {method}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Honeypot: hidden from people, tempting to bots. */}
      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input ref={honeypot} name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <label className="flex items-start gap-3 text-[15px] leading-relaxed text-ink">
          <input
            type="checkbox"
            name="acknowledged"
            required
            checked={values.acknowledged}
            onChange={(e) => update("acknowledged", e.target.checked)}
            className="mt-1 size-5 shrink-0 accent-navy"
            {...describe("acknowledged")}
          />
          <span>I understand that submitting this form does not create a lawyer-client relationship.</span>
        </label>
        <FieldError id="acknowledged-error" message={errors.acknowledged} />
      </div>

      {status === "failed" && (
        <p role="alert" className="rounded-lg border border-[#B3261E]/30 bg-[#B3261E]/5 p-4 text-sm text-ink">
          Your request could not be sent. Please call{" "}
          <a href={site.phoneHref} className="font-semibold underline">
            {site.phone}
          </a>{" "}
          or email{" "}
          <a href={site.emailHref} className="font-semibold underline">
            {site.email}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className={buttonClass("gold", "w-full cursor-pointer disabled:cursor-wait disabled:opacity-70")}
      >
        {status === "sending" ? "Sending…" : "Request a Consultation"}
        <ButtonArrow />
      </button>

      <p className="border-t border-line pt-5 text-[13px] leading-relaxed text-slate">
        Please do not send confidential or time-sensitive information through this form. Contacting
        Elizabeth Nijjar Law Corporation does not create a lawyer-client relationship unless a formal
        retainer agreement has been signed.
      </p>
    </form>
  );
}
