import type { ComponentType, SVGProps } from "react";
import { cn } from "@/lib/utils";

type Props = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
  dark?: boolean;
};

/** Icon + title + copy card used by the benefits, approach and values grids. */
export function IconCard({ icon: Icon, title, text, dark }: Props) {
  return (
    <div
      className={cn(
        "h-full rounded-xl border p-7 transition-all duration-300 hover:-translate-y-1",
        dark
          ? "border-white/12 bg-white/[0.04] hover:border-gold/60"
          : "border-line bg-white shadow-card hover:shadow-lift",
      )}
    >
      <span
        className={cn(
          "flex size-12 items-center justify-center rounded-[10px]",
          dark ? "border border-gold/50 text-gold" : "bg-navy text-white",
        )}
      >
        <Icon className="size-6" strokeWidth={1.75} aria-hidden="true" />
      </span>
      <h3 className={cn("mt-5 font-serif text-xl font-semibold", dark ? "text-white" : "text-navy")}>
        {title}
      </h3>
      <p className={cn("mt-2.5 leading-relaxed", dark ? "text-white/80" : "text-slate")}>{text}</p>
    </div>
  );
}
