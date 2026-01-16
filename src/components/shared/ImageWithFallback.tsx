"use client";

import { cn } from "@/lib/utils";
import { stringToSolidColor, getInitials, getContrastColor } from "@/utils/colorUtils";
import Image from "next/image";
import { useState } from "react";

interface ImageWithFallbackProps {
  src?: string | null;
  alt: string;
  fallbackText?: string;
  className?: string;
  width?: number;
  height?: number;
}

export function ImageWithFallback({
  src,
  alt,
  fallbackText,
  className,
  width = 48,
  height = 48,
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const displayText = fallbackText || alt;
  const initials = getInitials(displayText);
  const bgColor = stringToSolidColor(displayText);
  const textColor = getContrastColor(bgColor);

  if (!src || error) {
    return (
      <div
        className={cn(
          "flex items-center justify-center rounded-full font-semibold",
          className
        )}
        style={{
          backgroundColor: bgColor,
          color: textColor,
          width,
          height,
          fontSize: Math.max(width / 3, 12),
        }}
      >
        {initials}
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden rounded-full", className)} style={{ width, height }}>
      {loading && (
        <div
          className="absolute inset-0 flex items-center justify-center animate-pulse"
          style={{ backgroundColor: bgColor, color: textColor }}
        >
          {initials}
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn("object-cover", loading && "opacity-0")}
        onError={() => setError(true)}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}
