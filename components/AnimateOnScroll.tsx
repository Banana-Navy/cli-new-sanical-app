"use client";

import { type ReactNode } from "react";
import { useScrollReveal } from "./useScrollReveal";

type AnimationType =
  | "fadeUp"
  | "fadeIn"
  | "fadeLeft"
  | "fadeRight"
  | "scaleIn"
  | "slideUp";

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  as?: keyof HTMLElementTagNameMap;
  threshold?: number;
}

export default function AnimateOnScroll({
  children,
  animation = "fadeUp",
  delay = 0,
  duration = 700,
  className = "",
  as: Tag = "div",
  threshold = 0.15,
}: AnimateOnScrollProps) {
  const [ref, isVisible] = useScrollReveal<HTMLElement>({ threshold });

  const Component = Tag as React.ElementType;

  return (
    <Component
      ref={ref}
      className={`scroll-reveal ${isVisible ? `animate-${animation}` : "scroll-reveal-hidden"} ${className}`}
      style={{
        animationDelay: isVisible ? `${delay}ms` : undefined,
        animationDuration: isVisible ? `${duration}ms` : undefined,
      }}
    >
      {children}
    </Component>
  );
}
