"use client";

import Image from "next/image";
import type { PointerEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const particles = [
  { left: "12%", top: "18%", delay: 0, duration: 6.5 },
  { left: "78%", top: "14%", delay: 0.5, duration: 7.2 },
  { left: "88%", top: "48%", delay: 1.2, duration: 6.8 },
  { left: "20%", top: "68%", delay: 0.8, duration: 7.8 },
  { left: "64%", top: "82%", delay: 1.6, duration: 6.2 },
  { left: "42%", top: "10%", delay: 2.1, duration: 8 },
];

export function HeroAvatar() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 130, damping: 22, mass: 0.4 });
  const smoothY = useSpring(pointerY, { stiffness: 130, damping: 22, mass: 0.4 });
  const rotateY = useTransform(smoothX, [-1, 1], [-7, 7]);
  const rotateX = useTransform(smoothY, [-1, 1], [6, -6]);
  const imageX = useTransform(smoothX, [-1, 1], [-12, 12]);
  const imageY = useTransform(smoothY, [-1, 1], [-10, 10]);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    pointerX.set(x * 2);
    pointerY.set(y * 2);
  };

  const handlePointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <motion.div
      className="relative mx-auto flex min-h-[34rem] w-full max-w-[34rem] items-center justify-center [perspective:1200px]"
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="absolute inset-0 rounded-lg bg-[radial-gradient(circle_at_50%_42%,rgba(34,211,238,0.26),transparent_34%),radial-gradient(circle_at_70%_68%,rgba(168,85,247,0.18),transparent_34%)] blur-2xl" />

      {particles.map((particle) => (
        <motion.span
          aria-hidden
          key={`${particle.left}-${particle.top}`}
          className="absolute size-1.5 rounded-md bg-cyan-200/70 shadow-[0_0_18px_rgba(103,232,249,0.8)]"
          style={{ left: particle.left, top: particle.top }}
          animate={{ y: [-10, 12, -10], opacity: [0.25, 0.9, 0.25], scale: [0.8, 1.2, 0.8] }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div
        className="relative w-full max-w-[28rem] will-change-transform"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.025 }}
        transition={{ type: "spring", stiffness: 160, damping: 20 }}
      >
        <motion.div
          className="absolute -inset-6 rounded-lg border border-cyan-300/20"
          animate={{ opacity: [0.35, 0.8, 0.35], scale: [0.98, 1.02, 0.98] }}
          transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -inset-10 rounded-lg border border-violet-300/15"
          animate={{ rotate: [0, 2, 0], opacity: [0.22, 0.5, 0.22] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative overflow-hidden rounded-lg border border-cyan-300/25 bg-slate-950/72 p-3 shadow-[0_0_60px_rgba(34,211,238,0.18)] backdrop-blur-xl">
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200 to-transparent" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(103,232,249,0.11)_0,transparent_18%,transparent_82%,rgba(168,85,247,0.11)_100%)]" />
          <motion.div
            className="relative aspect-square overflow-hidden rounded-md border border-white/10 bg-slate-900"
            style={{ x: imageX, y: imageY, transformStyle: "preserve-3d" }}
          >
            <Image
              src="/assets/avatar/hero-ai-avatar.webp"
              alt="Nalin Sharma AI engineer avatar"
              fill
              priority
              sizes="(max-width: 768px) 82vw, (max-width: 1200px) 42vw, 448px"
              className="object-cover object-center"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_0%,rgba(255,255,255,0.12)_42%,transparent_58%)] opacity-40 mix-blend-screen" />
            <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(180deg,rgba(103,232,249,0.08)_0px,rgba(103,232,249,0.08)_1px,transparent_1px,transparent_9px)] opacity-35" />
          </motion.div>
        </div>

        <motion.div
          className="absolute -bottom-5 left-1/2 w-[74%] -translate-x-1/2 rounded-lg border border-cyan-300/20 bg-slate-950/72 px-4 py-3 text-center shadow-glow backdrop-blur-xl"
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-semibold uppercase text-cyan-100">AI Engineer & ML Developer</p>
          <p className="mt-1 text-xs text-muted-foreground">Building Real-World Intelligent Applications</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
