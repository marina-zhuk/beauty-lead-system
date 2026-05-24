import { Benefits } from "@/components/Benefits";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LeadForm } from "@/components/LeadForm";
import { Packages } from "@/components/Packages";
import { PortfolioProof } from "@/components/PortfolioProof";
import { Process } from "@/components/Process";
import { Solution } from "@/components/Solution";
import { WhatIDid } from "@/components/WhatIDid";
import { WhatOwnerReceives } from "@/components/WhatOwnerReceives";

export default function Home() {
  return (
    <main>
      <Hero />
      <Benefits />
      <Solution />
      <Process />
      <LeadForm />
      <PortfolioProof />
      <WhatIDid />
      <WhatOwnerReceives />
      <Packages />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
