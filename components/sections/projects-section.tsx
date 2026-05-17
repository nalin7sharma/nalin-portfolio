"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, Layers3, Radio } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/site/section-heading";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/animations";
import { projectFilters, projects } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    if (activeFilter === "Security") {
      return projects.filter((project) => project.stack.some((tech) => ["JWT", "AES"].includes(tech)));
    }
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-x-0 top-1/3 -z-10 h-80 bg-gradient-to-r from-violet-400/10 via-cyan-300/[0.12] to-blue-500/10 blur-3xl" />
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="Applied AI systems with product-shaped architecture."
          description="Each project is framed around the problem, the system design, and the engineering decisions behind it."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="mb-9 flex flex-wrap justify-center gap-2"
        >
          {projectFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "rounded-md border px-4 py-2 text-sm font-semibold transition-all",
                activeFilter === filter
                  ? "border-cyan-300/70 bg-cyan-300/15 text-cyan-100 shadow-glow"
                  : "border-white/10 bg-white/[0.035] text-muted-foreground hover:border-cyan-300/35 hover:text-white",
              )}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        <motion.div
          layout
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="grid gap-6 lg:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.title}
                layout
                variants={scaleIn}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                className={cn(project.featured ? "lg:col-span-1" : "")}
              >
                <Card className="group h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:shadow-glow">
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10">
                    <Image
                      src={project.image}
                      alt={`${project.title} visual system card`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4 flex gap-2">
                      {project.featured ? <Badge variant="violet">Featured</Badge> : null}
                      <Badge variant="outline">{project.category}</Badge>
                    </div>
                    <div className="absolute bottom-4 right-4 flex size-11 items-center justify-center rounded-md border border-white/10 bg-slate-950/75 text-cyan-100 backdrop-blur-md">
                      {index % 2 === 0 ? <Layers3 className="size-5" /> : <Radio className="size-5" />}
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-muted-foreground">
                          {project.summary}
                        </p>
                      </div>
                      <div className="flex shrink-0 gap-2">
                        <Button asChild variant="outline" size="icon">
                          <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub`}>
                            <Github />
                          </a>
                        </Button>
                        <Button variant="ghost" size="icon" disabled aria-label={`${project.title} live demo`}>
                          <ExternalLink />
                        </Button>
                      </div>
                    </div>

                    <div className="mt-6 rounded-lg border border-cyan-300/15 bg-cyan-300/[0.055] p-4">
                      <p className="text-sm font-semibold text-cyan-100">Problem solved</p>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.problem}</p>
                    </div>

                    <div className="mt-6 grid gap-5 md:grid-cols-2">
                      <div>
                        <p className="mb-3 text-sm font-semibold text-white">Core features</p>
                        <ul className="space-y-2">
                          {project.features.map((feature) => (
                            <li key={feature} className="flex gap-2 text-sm leading-6 text-muted-foreground">
                              <span className="mt-2 size-1.5 shrink-0 rounded-md bg-cyan-300" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="mb-3 text-sm font-semibold text-white">Architecture</p>
                        <ul className="space-y-2">
                          {project.architecture.map((item) => (
                            <li key={item} className="flex gap-2 text-sm leading-6 text-muted-foreground">
                              <span className="mt-2 size-1.5 shrink-0 rounded-md bg-violet-300" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
