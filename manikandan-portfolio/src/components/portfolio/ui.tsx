import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <Reveal className="mb-12">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-secondary">{eyebrow}</p>
        <h2 className="font-display text-3xl font-semibold md:text-4xl">{title}</h2>
      </Reveal>
      {children}
    </section>
  );
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("glass glass-hover rounded-2xl p-6", className)}>{children}</div>;
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
      {children}
    </span>
  );
}

const btn = {
  primary: "bg-primary text-primary-foreground hover:shadow-glow hover:brightness-110",
  outline: "border border-border bg-muted/40 text-foreground hover:border-primary/60 hover:bg-accent",
};
export function btnClass(v: keyof typeof btn = "primary") {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-all duration-300",
    btn[v],
  );
}
