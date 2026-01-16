"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TextHighlighterProps {
  children: React.ReactNode;
  className?: string;
  highlightColor?: string;
  delay?: number;
}

export function TextHighlighter({
  children,
  className,
  highlightColor = "#F5A623",
  delay = 0,
}: TextHighlighterProps) {
  return (
    <span className={cn("relative inline", className)}>
      <motion.span
        className="absolute bottom-0 left-0 h-[2px] w-full"
        style={{ backgroundColor: highlightColor, transformOrigin: "left" }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay, ease: "easeOut" }}
      />
      <span className="relative">{children}</span>
    </span>
  );
}
