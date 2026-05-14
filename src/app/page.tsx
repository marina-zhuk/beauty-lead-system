import { Benefits } from "@/components/Benefits";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LeadForm } from "@/components/LeadForm";
import { Process } from "@/components/Process";
import { Reviews } from "@/components/Reviews";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Benefits />
      <Process />
      <LeadForm />
      <Reviews />
      <FAQ />
      <Footer />
    </main>
  );
}
