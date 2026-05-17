"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Rocket } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ParticleSphere } from "@/components/visuals/particle-sphere";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { personal, rotatingTitles, stats } from "@/lib/portfolio-data";

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState("");

  useEffect(() => {
    const role = rotatingTitles[roleIndex];
    let position = 0;
    const typing = window.setInterval(() => {
      position += 1;
      setTypedRole(role.slice(0, position));
      if (position >= role.length) {
        window.clearInterval(typing);
        window.setTimeout(() => {
          setRoleIndex((index) => (index + 1) % rotatingTitles.length);
          setTypedRole("");
        }, 1300);
      }
    }, 48);

    return () => window.clearInterval(typing);
  }, [roleIndex]);

  return (
    <section
      id="top"
      className="relative isolate flex min-h-screen items-center overflow-hidden pb-20 pt-28"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_30%,rgba(14,165,233,0.22),transparent_32rem),radial-gradient(circle_at_80%_15%,rgba(168,85,247,0.22),transparent_30rem),linear-gradient(180deg,rgba(2,6,23,0.2),rgba(2,6,23,1))]" />
      <div className="absolute left-1/2 top-24 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 rounded-md bg-cyan-400/[0.08] blur-3xl" />

      <div className="container grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div variants={fadeUp}>
            <Badge variant="outline" className="mb-5">
              <Rocket className="mr-2 size-3.5" />
              AI products, ML systems, and product-minded engineering
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="max-w-4xl text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl"
          >
            {personal.name}
            <span className="mt-4 block min-h-[3.75rem] text-3xl text-cyan-100 sm:text-4xl lg:text-5xl">
              <span className="gradient-text">{typedRole}</span>
              <span className="ml-1 inline-block h-9 w-[3px] translate-y-1 bg-cyan-200" />
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl"
          >
            {personal.intro} I build applied AI systems across NLP, computer vision,
            healthcare AI, secure data pipelines, and full-stack product workflows.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="glow">
              <a href="#projects">
                View Projects
                <ArrowRight />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={personal.resume} download>
                <Download />
                Download Resume
              </a>
            </Button>
            <Button asChild size="lg" variant="violet">
              <a href="#contact">
                <Mail />
                Contact Me
              </a>
            </Button>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
            {personal.socials.map((social) => {
              const Icon = social.icon;
              return (
                <Button key={social.label} asChild variant="ghost" size="sm">
                  <a href={social.href} target="_blank" rel="noreferrer">
                    <Icon />
                    {social.label}
                  </a>
                </Button>
              );
            })}
          </motion.div>

          <motion.dl
            variants={fadeUp}
            className="mt-12 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="glass-panel rounded-lg p-4">
                <dt className="text-xs leading-5 text-muted-foreground">{stat.label}</dt>
                <dd className="mt-2 text-2xl font-semibold text-white">
                  {stat.value}
                  <span className="text-cyan-200">{stat.suffix}</span>
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.div
          className="relative min-h-[34rem]"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <div className="absolute inset-6 rounded-lg border border-cyan-300/20 bg-slate-950/30 shadow-glow" />
          <div className="absolute inset-0 overflow-hidden rounded-lg">
            <ParticleSphere />
          </div>
          <div className="absolute bottom-8 left-6 right-6 glass-panel rounded-lg p-5">
            <p className="text-sm font-semibold text-cyan-100">Current focus</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Applied AI products with strong foundations in transformer NLP, medical image
              analysis, secure pipelines, and edge-ready intelligent systems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
