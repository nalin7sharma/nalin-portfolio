"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Rocket } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HeroAvatar } from "@/components/visuals/hero-avatar";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { personal, rotatingTitles, stats } from "@/lib/portfolio-data";

function isHttpLink(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

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
      <div className="hero-aurora absolute inset-0 -z-10 overflow-hidden" />
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
              AI Engineer & ML Developer
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
                <Button
                  key={social.label}
                  asChild
                  variant="ghost"
                  size="sm"
                  className="group/social hover:-translate-y-1 hover:shadow-glow"
                >
                  <a
                    href={social.href}
                    {...(isHttpLink(social.href)
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                  >
                    <Icon className="transition-transform duration-300 group-hover/social:scale-110 group-hover/social:text-cyan-400 dark:group-hover/social:text-cyan-200" />
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

        <HeroAvatar />
      </div>
    </section>
  );
}
