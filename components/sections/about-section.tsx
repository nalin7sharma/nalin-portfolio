"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/site/section-heading";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { focusAreas, personal, stats } from "@/lib/portfolio-data";

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="About"
          title="AI engineer mindset with product instincts."
          description="Nalin is a B.Tech CSE-AI student focused on building scalable, secure, and useful AI systems that move beyond demos."
        />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            className="relative"
          >
            <div className="absolute -inset-3 rounded-lg bg-gradient-to-br from-cyan-300/20 via-violet-400/15 to-emerald-300/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-lg border border-white/10 bg-slate-950/70 p-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-md border border-cyan-300/20 bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950/45">
                <Image
                  src="/assets/profile-placeholder.svg"
                  alt="Futuristic profile placeholder for Nalin Sharma"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <div className="mt-4 flex items-center justify-between gap-3">
                <div>
                  <p className="font-semibold text-white">{personal.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{personal.role}</p>
                </div>
                <Badge variant="outline">
                  <MapPin className="mr-2 size-3.5" />
                  Delhi
                </Badge>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
          >
            <motion.p variants={fadeUp} className="text-lg leading-8 text-muted-foreground">
              {personal.summary} His work spans mental health NLP, cloudburst early-warning
              systems, YOLO-based real-time detection, face recognition, and healthcare image
              analysis through the Infosys Springboard MediScan internship.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((stat) => (
                <Card key={stat.label} className="bg-white/[0.04]">
                  <CardContent className="p-4">
                    <p className="text-2xl font-semibold text-white">
                      {stat.value}
                      <span className="text-cyan-200">{stat.suffix}</span>
                    </p>
                    <p className="mt-2 text-xs leading-5 text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 grid gap-4 md:grid-cols-3">
              {focusAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <Card key={area.title} className="group overflow-hidden">
                    <CardContent className="p-5">
                      <div className="mb-4 flex size-10 items-center justify-center rounded-md bg-cyan-300/10 text-cyan-100 group-hover:shadow-glow">
                        <Icon className="size-5" />
                      </div>
                      <h3 className="font-semibold text-white">{area.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">
                        {area.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
