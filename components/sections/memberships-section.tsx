"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/site/section-heading";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { achievements, memberships } from "@/lib/portfolio-data";

export function MembershipsSection() {
  return (
    <section id="memberships" className="relative py-24 sm:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Achievements & Memberships"
          title="Signals of research momentum and technical community."
          description="A compact view of accepted research, applied AI work, and IEEE memberships that support Nalin's engineering direction."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="mx-auto mb-6 grid max-w-5xl gap-4 md:grid-cols-3"
        >
          {achievements.map((achievement) => {
            const Icon = achievement.icon;
            return (
              <motion.div key={achievement.title} variants={fadeUp}>
                <Card className="h-full">
                  <CardContent className="p-5">
                    <div className="mb-4 flex size-10 items-center justify-center rounded-md bg-violet-300/10 text-violet-100">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="font-semibold text-white">{achievement.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {achievement.detail}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2"
        >
          {memberships.map((membership) => {
            const Icon = membership.icon;
            return (
              <motion.a
                key={membership.title}
                variants={fadeUp}
                href={membership.href}
                target="_blank"
                rel="noreferrer"
                className="group"
              >
                <Card className="h-full transition-all duration-300 group-hover:-translate-y-1 group-hover:border-cyan-300/35 group-hover:shadow-glow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex size-12 items-center justify-center rounded-md bg-cyan-300/10 text-cyan-100">
                        <Icon className="size-6" />
                      </div>
                      <ExternalLink className="size-4 text-muted-foreground transition-colors group-hover:text-cyan-100" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-white">{membership.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {membership.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      <Badge variant="outline">ID {membership.id}</Badge>
                      <Badge variant="secondary">{membership.period}</Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
