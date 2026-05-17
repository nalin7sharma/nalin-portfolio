"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const move = (event: PointerEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      const target = event.target;
      setActive(
        target instanceof Element
          ? Boolean(target.closest("a, button, [data-cursor='active']"))
          : false,
      );
    };

    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden size-8 rounded-md border border-cyan-200/50 mix-blend-difference md:block"
      animate={{
        x: position.x - 16,
        y: position.y - 16,
        scale: active ? 1.8 : 1,
        opacity: position.x < 0 ? 0 : 1,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 34, mass: 0.4 }}
    />
  );
}
