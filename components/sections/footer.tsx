"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navLinks, personal } from "@/lib/portfolio-data";

const COPYRIGHT_YEAR = 2026;

function isHttpLink(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80 py-10">
      <div className="container flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Link href="#top" className="inline-flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-md border border-cyan-300/35 bg-cyan-300/10 text-sm font-bold text-cyan-100">
              NS
            </span>
            <span className="font-semibold text-white">Nalin Sharma</span>
          </Link>
          <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
            AI/ML Engineer portfolio built for internships, research roles, AI startups, and
            software engineering opportunities.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {navLinks.slice(0, 5).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-white/[0.06] hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {personal.socials.slice(0, 3).map((social) => {
            const Icon = social.icon;
            return (
              <Button key={social.label} asChild variant="outline" size="icon">
                <a
                  href={social.href}
                  {...(isHttpLink(social.href)
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                  aria-label={social.label}
                >
                  <Icon />
                </a>
              </Button>
            );
          })}
          <Button asChild variant="glow" size="icon">
            <Link href="#top" aria-label="Back to top">
              <ArrowUp />
            </Link>
          </Button>
        </div>
      </div>
      <div className="container mt-8 border-t border-white/10 pt-6 text-sm text-muted-foreground">
        Copyright {COPYRIGHT_YEAR} Nalin Sharma. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.
      </div>
    </footer>
  );
}
