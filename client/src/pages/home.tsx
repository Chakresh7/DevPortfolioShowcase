import { Hero } from "../components/sections/hero";
import Services from "../components/sections/services";
import { Projects } from "../components/sections/projects";
import { About } from "../components/sections/about";
import { Contact } from "../components/sections/contact";
import { FAQ } from "../components/sections/faq";

export function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Projects />
      <About />
      <FAQ />
      <Contact />
    </div>
  );
}
