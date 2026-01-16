"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface LineShadowTextProps {
  children: React.ReactNode;
  className?: string;
  shadowColor?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export function LineShadowText({
  children,
  className,
  shadowColor = "rgba(158, 122, 255, 0.5)",
  as: Component = "span",
}: LineShadowTextProps) {
  return (
    <motion.span
      className={cn("relative inline-block", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Shadow layer */}
      <span
        className="absolute inset-0 translate-x-1 translate-y-1 select-none"
        style={{ color: shadowColor }}
        aria-hidden="true"
      >
        {children}
      </span>
      {/* Main text layer */}
      <Component className="relative">{children}</Component>
    </motion.span>
  );
}
