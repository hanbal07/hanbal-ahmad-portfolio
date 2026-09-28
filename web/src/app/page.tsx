import { Hero } from "@/components/sections/Hero";
import { CredibilityStrip } from "@/components/sections/CredibilityStrip";
import { Projects } from "@/components/sections/Projects";
import { TechStack } from "@/components/sections/TechStack";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { WhyWorkWithMe } from "@/components/sections/WhyWorkWithMe";
import { Process } from "@/components/sections/Process";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <CredibilityStrip />
      <Projects />
      <TechStack />
      <Services />
      <About />
      <WhyWorkWithMe />
      <Process />
      <Contact />
    </>
  );
}
