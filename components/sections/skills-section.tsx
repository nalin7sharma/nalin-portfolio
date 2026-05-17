"use client";

import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/site/section-heading";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { skillCategories } from "@/lib/portfolio-data";

export function SkillsSection() {
  return (
    <section id="skills" className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-x-0 top-20 -z-10 h-56 bg-gradient-to-r from-cyan-400/[0.08] via-violet-400/10 to-emerald-300/[0.08] blur-3xl" />
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="A practical AI/ML toolkit for building real systems."
          description="The stack combines model development, secure backend thinking, data pipelines, monitoring basics, and production-aware deployment."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div key={category.title} variants={fadeUp}>
                <Card className="group h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:shadow-glow">
                  <CardContent className="p-5">
                    <div className="mb-6 flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm text-muted-foreground">Category</p>
                        <h3 className="mt-1 text-xl font-semibold text-white">{category.title}</h3>
                      </div>
                      <div
                        className={`flex size-11 items-center justify-center rounded-md bg-gradient-to-br ${category.accent} text-slate-950 shadow-glow`}
                      >
                        <Icon className="size-5" />
                      </div>
                    </div>

                    <div className="space-y-4">
                      {category.skills.map((skill) => (
                        <div key={skill.name}>
                          <div className="mb-2 flex items-center justify-between gap-3 text-sm">
                            <span className="font-medium text-slate-100">{skill.name}</span>
                            <span className="text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="h-2 overflow-hidden rounded-md bg-white/[0.06]">
                            <motion.div
                              className={`h-full rounded-md bg-gradient-to-r ${category.accent}`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
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
