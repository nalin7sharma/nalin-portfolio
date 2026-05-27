"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { motion } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Clipboard,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "@/components/site/section-heading";
import { fadeUp } from "@/lib/animations";
import { personal } from "@/lib/portfolio-data";

type FormState = {
  type: "idle" | "success" | "error";
  message: string;
};

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
  company: string;
};

const initialFormValues: ContactFormValues = {
  name: "",
  email: "",
  message: "",
  company: "",
};

const configuredContactEndpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT?.trim();
const defaultContactEndpoint =
  process.env.NODE_ENV === "development"
    ? "https://nalinsharma.co.in/api/contact.php"
    : "/api/contact.php";
const contactEndpoint = configuredContactEndpoint || defaultContactEndpoint;

function isHttpLink(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isContactFormField(field: string): field is keyof ContactFormValues {
  return field === "name" || field === "email" || field === "message" || field === "company";
}

export function ContactSection() {
  const [formState, setFormState] = useState<FormState>({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formValues, setFormValues] = useState<ContactFormValues>(initialFormValues);

  const updateField = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.currentTarget;

    if (!isContactFormField(name)) {
      return;
    }

    setFormValues((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setFormState({
        type: "error",
        message: "Copy failed. Please select the email address manually.",
      });
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormState({ type: "idle", message: "" });

    const name = formValues.name.trim();
    const email = formValues.email.trim();
    const message = formValues.message.trim();
    const company = formValues.company.trim();

    if (company) {
      console.info("[contact] Honeypot field filled; ignoring submission.");
      return;
    }

    if (!name || !email || !message) {
      setFormState({ type: "error", message: "Please complete all fields before sending." });
      return;
    }

    if (!isValidEmail(email)) {
      setFormState({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    if (message.length < 10) {
      setFormState({
        type: "error",
        message: "Please add a little more context so Nalin can reply properly.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      console.info("[contact] Sending portfolio message.", {
        endpoint: contactEndpoint,
        hasName: Boolean(name),
        hasEmail: Boolean(email),
        messageLength: message.length,
      });

      const response = await fetch(contactEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          company,
          phone: personal.phone,
          subject: `Portfolio inquiry from ${name}`,
          source: "nalinsharma.co.in portfolio",
        }),
      });

      const responseText = await response.text();
      let responseBody: { ok?: boolean; message?: string } | null = null;

      try {
        responseBody = responseText
          ? (JSON.parse(responseText) as { ok?: boolean; message?: string })
          : null;
      } catch {
        responseBody = null;
      }

      if (!response.ok || responseBody?.ok === false) {
        console.error("[contact] Message submission failed.", {
          status: response.status,
          endpoint: contactEndpoint,
          response: responseText,
        });
        throw new Error(responseBody?.message || "The message could not be sent.");
      }

      setFormValues(initialFormValues);
      setFormState({
        type: "success",
        message: responseBody?.message || "Message sent successfully. Nalin will get back to you soon.",
      });
    } catch (error) {
      console.error("[contact] Message submission error.", error);
      setFormState({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Message could not be sent. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
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
                <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href={`mailto:${personal.email}`}
                    className="break-all text-lg font-semibold text-white hover:text-cyan-100"
                  >
                    {personal.email}
                  </a>
                  <Button type="button" variant="outline" size="sm" onClick={copyEmail}>
                    {copied ? <CheckCircle2 /> : <Clipboard />}
                    {copied ? "Copied" : "Copy"}
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Phone className="mb-5 size-6 text-emerald-200" />
                <p className="text-sm text-muted-foreground">Phone</p>
                <a
                  href={`tel:${personal.phone.replace(/\s/g, "")}`}
                  className="mt-2 block text-lg font-semibold text-white hover:text-cyan-100"
                >
                  {personal.phone}
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
                        {...(isHttpLink(social.href)
                          ? { target: "_blank", rel: "noreferrer" }
                          : {})}
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
                <input
                  type="text"
                  name="company"
                  suppressHydrationWarning
                  value={formValues.company}
                  onChange={updateField}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="space-y-2">
                    <span className="text-sm font-medium text-white">Name</span>
                    <Input
                      name="name"
                      placeholder="Your name"
                      value={formValues.name}
                      onChange={updateField}
                      required
                    />
                  </label>
                  <label className="space-y-2">
                    <span className="text-sm font-medium text-white">Email</span>
                    <Input
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      value={formValues.email}
                      onChange={updateField}
                      required
                    />
                  </label>
                </div>
                <label className="block space-y-2">
                  <span className="text-sm font-medium text-white">Message</span>
                  <Textarea
                    name="message"
                    placeholder="Tell me about the role, project, or collaboration."
                    value={formValues.message}
                    onChange={updateField}
                    required
                  />
                </label>
                <Button
                  type="submit"
                  size="lg"
                  variant="glow"
                  disabled={isSubmitting}
                  suppressHydrationWarning
                >
                  {isSubmitting ? <Loader2 className="animate-spin" /> : <Send />}
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
                {formState.type !== "idle" ? (
                  <div
                    role="status"
                    aria-live="polite"
                    className={`flex items-start gap-3 rounded-lg border p-4 text-sm ${
                      formState.type === "success"
                        ? "border-emerald-300/25 bg-emerald-300/10 text-emerald-100"
                        : "border-red-300/25 bg-red-300/10 text-red-100"
                    }`}
                  >
                    {formState.type === "success" ? (
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0" />
                    ) : (
                      <AlertCircle className="mt-0.5 size-4 shrink-0" />
                    )}
                    <span>{formState.message}</span>
                  </div>
                ) : null}
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
