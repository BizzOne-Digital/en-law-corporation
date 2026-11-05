import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "gold" | "outline" | "outlineLight";

const variants: Record<Variant, string> = {
  gold: "bg-gradient-to-b from-[#e3b65f] to-gold text-navy shadow-[0_8px_20px_-10px_rgb(216_164_71/0.8)] hover:brightness-105",
  outline: "border border-gold bg-white text-navy hover:bg-navy hover:border-navy hover:text-white",
  outlineLight: "border border-white/45 text-white hover:border-gold hover:text-gold",
};

export const buttonClass = (variant: Variant = "gold", className?: string) =>
  cn(
    "group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-lg px-6 py-3 text-[15px] font-semibold transition-all duration-300",
    variants[variant],
    className,
  );

export const ButtonArrow = () => (
  <ArrowRight
    className="size-[18px] transition-transform duration-300 group-hover:translate-x-1"
    aria-hidden="true"
  />
);

type ButtonProps = {
  href: string;
  variant?: Variant;
  className?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
};

export function Button({ href, variant = "gold", className, icon, children }: ButtonProps) {
  return (
    <Link href={href} className={buttonClass(variant, className)}>
      {icon}
      {children}
      <ButtonArrow />
    </Link>
  );
}
