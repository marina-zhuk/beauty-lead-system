import { Benefits } from "@/components/Benefits";
import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LeadForm } from "@/components/LeadForm";
import { Packages } from "@/components/Packages";
import { Process } from "@/components/Process";
import { Solution } from "@/components/Solution";
import { WhatOwnerReceives } from "@/components/WhatOwnerReceives";
import { WorkExample } from "@/components/WorkExample";

export default function Home() {
  return (
    <main>
      <Hero />
      <Benefits />
      <Process />
      <WhatOwnerReceives />
      <Features />
      <LeadForm />
      <Solution />
      <WorkExample />
      <Packages />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
