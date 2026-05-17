"use client";

import { AboutSection } from "@/components/sections/about-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { ContactSection } from "@/components/sections/contact-section";
import { EducationSection } from "@/components/sections/education-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { MembershipsSection } from "@/components/sections/memberships-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ResearchSection } from "@/components/sections/research-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { CustomCursor } from "@/components/site/custom-cursor";
import { Navbar } from "@/components/site/navbar";
import { PageLoader } from "@/components/site/page-loader";
import { ScrollProgress } from "@/components/site/scroll-progress";

export function PortfolioShell() {
  return (
    <>
      <PageLoader />
      <ScrollProgress />
      <CustomCursor />
      <div className="pointer-events-none fixed inset-0 -z-20 grid-background opacity-70" />
      <div className="pointer-events-none fixed inset-0 -z-10 noise-overlay opacity-[0.035]" />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ResearchSection />
        <CertificationsSection />
        <EducationSection />
        <MembershipsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
