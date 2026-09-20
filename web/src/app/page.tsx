import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { Projects } from "@/components/sections/Projects";
import { AIEngine } from "@/components/sections/AIEngine";
import { GitHubSection } from "@/components/sections/GitHubSection";
import { Services } from "@/components/sections/Services";
import { WhyWorkWithMe } from "@/components/sections/WhyWorkWithMe";
import { Process } from "@/components/sections/Process";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <AIEngine />
      <GitHubSection />
      <Services />
      <WhyWorkWithMe />
      <Process />
      <Education />
      <Contact />
    </>
  );
}