import { Hero } from "@/components/sections/Hero";
import { CredibilityStrip } from "@/components/sections/CredibilityStrip";
import { About } from "@/components/sections/About";
import { WhatIBuild } from "@/components/sections/WhatIBuild";
import { TechStack } from "@/components/sections/TechStack";
import { Projects } from "@/components/sections/Projects";
import { Journey } from "@/components/sections/Journey";
import { AIEngine } from "@/components/sections/AIEngine";
import { GitHubSection } from "@/components/sections/GitHubSection";
import { WhyWorkWithMe } from "@/components/sections/WhyWorkWithMe";
import { Process } from "@/components/sections/Process";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <CredibilityStrip />
      <About />
      <WhatIBuild />
      <TechStack />
      <Projects />
      <Journey />
      <AIEngine />
      <GitHubSection />
      <WhyWorkWithMe />
      <Process />
      <Contact />
    </>
  );
}