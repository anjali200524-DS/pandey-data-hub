import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </div>
  );
}

export function Section({
  id,
  label,
  title,
  meta,
  children,
  className,
}: {
  id: string;
  label: string;
  title: string;
  meta?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("border-t border-border py-20 md:py-24", className)}>
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="label-mono mb-3 flex items-center gap-2">
            <span className="inline-block size-1.5 rounded-full bg-primary" />
            {label}
          </p>
          <div className="mb-10 flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="font-display text-3xl font-bold tracking-tighter md:text-4xl">
              {title}
            </h2>
            {meta ? <span className="label-mono">{meta}</span> : null}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
