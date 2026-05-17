"use client";

import { motion } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/site/section-heading";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { education } from "@/lib/portfolio-data";

export function EducationSection() {
  return (
    <section id="education" className="relative py-24 sm:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation in Computer Science and AI."
          description="Formal AI-focused engineering education supported by strong school performance and technical coursework."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="mx-auto max-w-4xl space-y-6"
        >
          {education.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} variants={fadeUp} className="relative pl-8">
                <div className="absolute bottom-0 left-3 top-0 w-px bg-white/[0.12]" />
                <div className="absolute left-0 top-6 flex size-6 items-center justify-center rounded-md border border-cyan-300/50 bg-slate-950 text-cyan-100">
                  <Icon className="size-3.5" />
                </div>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                        <p className="mt-2 text-cyan-100">{item.institution}</p>
                        <p className="mt-2 text-sm text-muted-foreground">{item.meta}</p>
                      </div>
                      <div className="shrink-0 rounded-lg border border-white/10 bg-white/[0.04] p-4 text-sm text-muted-foreground">
                        <p className="flex items-center gap-2">
                          <CalendarDays className="size-4 text-cyan-200" />
                          {item.period}
                        </p>
                        <p className="mt-2 flex items-center gap-2">
                          <MapPin className="size-4 text-cyan-200" />
                          {item.location}
                        </p>
                      </div>
                    </div>
                    <p className="mt-5 inline-flex rounded-md border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-sm font-semibold text-cyan-100">
                      {item.score}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
