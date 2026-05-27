"use client";

import { motion } from "framer-motion";

import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      className={cn("mx-auto mb-12 max-w-3xl", align === "center" ? "text-center" : "text-left")}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
    >
      <p className="mb-3 text-sm font-semibold uppercase text-cyan-600 dark:text-cyan-200">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold text-foreground sm:text-4xl md:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">{description}</p>
      ) : null}
    </motion.div>
  );
}
