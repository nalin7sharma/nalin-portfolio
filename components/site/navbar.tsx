"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navLinks, personal } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/site/theme-toggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-white/10 bg-slate-950/[0.72] backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <nav className="container flex h-16 items-center justify-between">
        <Link href="#top" className="flex items-center gap-3" aria-label="Nalin Sharma home">
          <span className="flex size-9 items-center justify-center rounded-md border border-cyan-300/35 bg-cyan-300/10 text-sm font-bold text-cyan-100 shadow-glow">
            NS
          </span>
          <span className="hidden text-sm font-semibold text-white sm:block">Nalin Sharma</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/[0.06] hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Button asChild variant="glow" size="sm">
            <a href={personal.resume} download>
              <Download />
              Resume
            </a>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-white lg:hidden"
          aria-label="Open menu"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-white/10 bg-slate-950/[0.96] px-4 py-4 backdrop-blur-xl lg:hidden">
          <div className="mx-auto grid max-w-md gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-3 text-sm text-muted-foreground hover:bg-white/[0.06] hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-2">
              <ThemeToggle />
              <Button asChild variant="glow" className="flex-1">
                <a href={personal.resume} download>
                  <Download />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
