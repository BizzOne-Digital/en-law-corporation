import { cn } from "@/lib/utils";

type Props = {
  label?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
};

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep", className)}>
      {children}
    </p>
  );
}

export function SectionHeading({ label, title, description, align = "center", className }: Props) {
  const centered = align === "center";
  return (
    <div className={cn(centered && "mx-auto max-w-2xl text-center", className)}>
      {label && <Eyebrow>{label}</Eyebrow>}
      <h2 className="mt-3 font-serif text-[2rem] font-semibold leading-[1.15] text-navy sm:text-[2.6rem]">
        {title}
      </h2>
      {description && <p className="mt-4 text-[17px] leading-relaxed text-slate">{description}</p>}
    </div>
  );
}
