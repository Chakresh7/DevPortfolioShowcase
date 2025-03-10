import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Projects } from "@/components/sections/projects";
import { Values } from "@/components/sections/values";
import { Team } from "@/components/sections/team";
import { FAQs } from "@/components/sections/faqs";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Projects />
      <Values />
      <Team />
      <FAQs />
      <Testimonials />
      <Contact />
    </main>
  );
}
