"use client";

import { motion } from "framer-motion";
import { BookMarked, ExternalLink, Quote } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/site/section-heading";
import { fadeUp } from "@/lib/animations";
import { publication } from "@/lib/portfolio-data";

export function ResearchSection() {
  return (
    <section id="research" className="relative py-24 sm:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Research"
          title="Publication work in visual intelligence."
          description="Research interest sits naturally beside Nalin's computer vision project work, with a focus on CNNs and machine visual understanding."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="mx-auto max-w-4xl"
        >
          <Card className="relative overflow-hidden">
            <div className="absolute right-6 top-6 text-cyan-300/20">
              <Quote className="size-24" />
            </div>
            <CardContent className="relative p-6 sm:p-8">
              <div className="mb-6 flex size-12 items-center justify-center rounded-md bg-cyan-300/10 text-cyan-100 shadow-glow">
                <BookMarked className="size-6" />
              </div>
              <p className="text-sm text-muted-foreground">
                {publication.authors}, {publication.year}
              </p>
              <h3 className="mt-3 max-w-3xl text-2xl font-semibold leading-snug text-white sm:text-3xl">
                {publication.title}
              </h3>
              <p className="mt-5 text-lg text-cyan-100">{publication.venue}</p>
              <p className="mt-2 text-muted-foreground">{publication.status}</p>

              <div className="mt-7 flex flex-wrap gap-2">
                {publication.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>

              <Button asChild variant="outline" className="mt-8">
                <a href={publication.link} target="_blank" rel="noreferrer">
                  View forthcoming article page
                  <ExternalLink />
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
