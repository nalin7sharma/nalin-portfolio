"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, GraduationCap } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/site/section-heading";
import { fadeUp } from "@/lib/animations";
import { certifications, courses } from "@/lib/portfolio-data";

export function CertificationsSection() {
  return (
    <section id="certifications" className="relative overflow-hidden py-24 sm:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Certifications"
          title="Continuous learning across AI, data science, and research writing."
          description="Certificates and workshops from Infosys, Cisco Networking Academy, BIT Mesra, CSJMU, and NIT Jamshedpur."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="scrollbar-hide -mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-4"
        >
          {certifications.map((certificate) => (
            <a
              key={`${certificate.title}-${certificate.href}`}
              href={certificate.href}
              target="_blank"
              rel="noreferrer"
              className="group min-w-[18rem] snap-start"
            >
              <Card className="h-full transition-all duration-300 group-hover:-translate-y-1 group-hover:border-cyan-300/35 group-hover:shadow-glow">
                <CardContent className="p-5">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="flex size-11 items-center justify-center rounded-md bg-violet-300/10 text-violet-100">
                      <Award className="size-5" />
                    </div>
                    <ExternalLink className="size-4 text-muted-foreground transition-colors group-hover:text-cyan-100" />
                  </div>
                  <Badge variant="secondary">{certificate.issuer}</Badge>
                  <h3 className="mt-4 min-h-14 text-base font-semibold leading-6 text-white">
                    {certificate.title}
                  </h3>
                  <p className="mt-5 text-sm text-muted-foreground">{certificate.date}</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="mt-10 grid gap-4 md:grid-cols-3"
        >
          {courses.map((course) => (
            <a key={course.href} href={course.href} target="_blank" rel="noreferrer">
              <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:border-violet-300/35 hover:shadow-purple-glow">
                <CardContent className="p-5">
                  <div className="mb-4 flex size-10 items-center justify-center rounded-md bg-cyan-300/10 text-cyan-100">
                    <GraduationCap className="size-5" />
                  </div>
                  <p className="text-sm text-muted-foreground">{course.date}</p>
                  <h3 className="mt-3 font-semibold leading-6 text-white">{course.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{course.issuer}</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
