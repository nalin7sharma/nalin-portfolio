"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "@/components/site/section-heading";
import { fadeUp } from "@/lib/animations";
import { personal } from "@/lib/portfolio-data";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const message = String(form.get("message") || "");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "Recruiter"}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-x-0 bottom-0 -z-10 h-80 bg-gradient-to-r from-cyan-400/[0.12] via-violet-400/10 to-emerald-300/10 blur-3xl" />
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something impactful together."
          description="Open to internships, AI startup roles, research collaborations, and software engineering opportunities where applied AI can create measurable value."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]"
        >
          <div className="space-y-5">
            <Card>
              <CardContent className="p-6">
                <Mail className="mb-5 size-6 text-cyan-200" />
                <p className="text-sm text-muted-foreground">Email</p>
                <a
                  href={`mailto:${personal.email}`}
                  className="mt-2 block text-lg font-semibold text-white hover:text-cyan-100"
                >
                  {personal.email}
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <MapPin className="mb-5 size-6 text-violet-200" />
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="mt-2 text-lg font-semibold text-white">{personal.location}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground">Profiles</p>
                <div className="mt-4 grid gap-2">
                  {personal.socials.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between rounded-md border border-white/10 bg-white/[0.035] px-3 py-2 text-sm text-muted-foreground transition-colors hover:border-cyan-300/35 hover:text-white"
                      >
                        <span className="inline-flex items-center gap-2">
                          <Icon className="size-4 text-cyan-200" />
                          {social.label}
                        </span>
                        <ArrowRight className="size-4" />
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="overflow-hidden">
            <CardContent className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="space-y-2">
                    <span className="text-sm font-medium text-white">Name</span>
                    <Input name="name" placeholder="Your name" required />
                  </label>
                  <label className="space-y-2">
                    <span className="text-sm font-medium text-white">Email</span>
                    <Input name="email" type="email" placeholder="you@company.com" required />
                  </label>
                </div>
                <label className="block space-y-2">
                  <span className="text-sm font-medium text-white">Message</span>
                  <Textarea
                    name="message"
                    placeholder="Tell me about the role, project, or collaboration."
                    required
                  />
                </label>
                <Button type="submit" size="lg" variant="glow">
                  <Send />
                  Send Email
                </Button>
                {sent ? (
                  <p className="text-sm text-cyan-100">
                    Your email client should open with the message ready to send.
                  </p>
                ) : null}
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
