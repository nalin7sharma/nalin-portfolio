"use client";

import { motion } from "framer-motion";
import { CalendarDays, ExternalLink, MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/site/section-heading";
import { fadeUp } from "@/lib/animations";
import { experience } from "@/lib/portfolio-data";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 sm:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="Healthcare AI experience with production-aware pipelines."
          description="A focused internship project combining medical image analysis, preprocessing, segmentation, feature extraction, and deployment-oriented ML workflows."
        />

        <div className="mx-auto max-w-5xl">
          {experience.map((item) => (
            <motion.div
              key={item.project}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              className="relative pl-8"
            >
              <div className="absolute bottom-0 left-3 top-0 w-px bg-gradient-to-b from-cyan-300 via-violet-300 to-transparent" />
              <div className="absolute left-0 top-6 size-6 rounded-md border border-cyan-300/60 bg-slate-950 shadow-glow" />
              <Card className="overflow-hidden">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <Badge variant="outline">{item.company}</Badge>
                      <h3 className="mt-4 text-2xl font-semibold text-white">{item.role}</h3>
                      <p className="mt-3 text-lg text-cyan-100">{item.project}</p>
                      <div className="mt-4 flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <span className="inline-flex items-center gap-2">
                          <CalendarDays className="size-4 text-cyan-200" />
                          {item.period}
                        </span>
                        <span className="inline-flex items-center gap-2">
                          <MapPin className="size-4 text-cyan-200" />
                          {item.location}
                        </span>
                      </div>
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <a href={item.certificate} target="_blank" rel="noreferrer">
                        Certificate
                        <ExternalLink />
                      </a>
                    </Button>
                  </div>

                  <div className="mt-7 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
                    <ul className="space-y-3">
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                          <span className="mt-2 size-1.5 shrink-0 rounded-md bg-cyan-300" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                      {item.metrics.map((metric) => (
                        <div
                          key={metric}
                          className="rounded-lg border border-white/10 bg-white/[0.04] p-4"
                        >
                          <p className="text-sm font-semibold text-white">{metric}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {item.stack.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
