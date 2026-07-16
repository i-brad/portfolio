"use client";

import { useEffect, useRef, useState } from "react";
import {
  useInView,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

/**
 * Animates the numeric portion of a value string (e.g. "$12M+", "78ms", "−94%")
 * while preserving any prefix/suffix.
 */
export function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();

  const match = value.match(/-?[\d,]+(?:\.\d+)?/);
  const number = match ? parseFloat(match[0].replace(/,/g, "")) : null;
  const [prefix, suffix] = match ? value.split(match[0]) : ["", ""];

  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1400, bounce: 0 });
  const [display, setDisplay] = useState(number !== null ? "0" : value);

  useEffect(() => {
    if (number === null || reduce) return;
    if (inView) mv.set(number);
  }, [inView, number, mv, reduce]);

  useEffect(() => {
    if (number === null) return;
    if (reduce) {
      setDisplay(formatNumber(number));
      return;
    }
    return spring.on("change", (latest) => {
      setDisplay(formatNumber(latest));
    });
  }, [spring, number, reduce]);

  if (number === null) {
    return <span ref={ref}>{value}</span>;
  }

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

function formatNumber(n: number) {
  const isInt = Number.isInteger(n);
  return isInt
    ? Math.round(n).toLocaleString("en-US")
    : n.toLocaleString("en-US", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
}
