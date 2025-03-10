import { Button } from "@/components/ui/button";
import { MotionSection, fadeIn } from "@/components/ui/motion";
import { SiGithub, SiLinkedin, SiBehance, SiDribbble } from "react-icons/si";

export function Hero() {
  return (
    <MotionSection
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeIn}
      className="min-h-screen flex items-center bg-background text-foreground relative overflow-hidden"
    >
      <div className="container px-4 mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h2 className="text-lg font-medium text-primary">Hy! I Am</h2>
          <h1 className="text-5xl md:text-6xl font-bold">
            Brunao Dev
          </h1>
          <p className="text-xl text-muted-foreground max-w-lg">
            I'm a UI Designer and Digital Creator working to bring digital ideas to life through design.
          </p>
          <div className="flex gap-4">
            <Button size="lg">Get In Touch</Button>
          </div>
          <div className="flex gap-4 pt-4">
            <a href="#" className="text-muted-foreground hover:text-primary">
              <SiGithub size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <SiLinkedin size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <SiBehance size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <SiDribbble size={24} />
            </a>
          </div>
        </div>
        <div className="relative">
          <img 
            src="/hero-image.png" 
            alt="Developer Portrait" 
            className="w-full"
          />
          <div className="absolute -top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
            <span className="text-sm font-medium">Best Design</span>
            <span className="block text-primary font-bold">Awards</span>
          </div>
          <div className="absolute bottom-4 -left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
            <span className="text-sm font-medium">Years of</span>
            <span className="block text-primary font-bold">Experience</span>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}