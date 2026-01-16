"use client";

import { cn } from "@/lib/utils";
import { BlurFade } from "@/components/ui/blur-fade";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function SectionWrapper({ children, className, id }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative mx-auto max-w-7xl px-6 py-16 sm:px-16 sm:py-20",
        className
      )}
    >
      <BlurFade delay={0.1} inView>
        {children}
      </BlurFade>
    </section>
  );
}
