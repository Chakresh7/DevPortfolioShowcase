import { Button } from "@/components/ui/button";
import { MotionDiv, staggerContainer, fadeIn } from "@/components/ui/motion";
import { SiGithub, SiLinkedin, SiDribbble } from "react-icons/si";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-background text-foreground pt-16">
      <div className="container px-4 mx-auto">
        <MotionDiv
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <MotionDiv variants={fadeIn} className="space-y-8">
            <div>
              <h2 className="text-lg font-medium text-primary mb-2">HELLO, I'M</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                CHAKRESHKUMAR VULLI
              </h1>
              <p className="text-xl mt-4 text-muted-foreground max-w-lg uppercase">
                Digital Solution Specialist & Full Stack Developer
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                VIEW PROJECTS
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                CONTACT ME
              </Button>
            </div>

            <div className="flex gap-6 pt-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <SiGithub size={24} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <SiLinkedin size={24} />
              </a>
              <a 
                href="https://dribbble.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <SiDribbble size={24} />
              </a>
            </div>
          </MotionDiv>

          <MotionDiv variants={fadeIn} className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-orange-400/20 p-1">
              <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center overflow-hidden">
                <img 
                  src="/avatar.png" 
                  alt="ChakreshKumarVulli"
                  className="w-[90%] h-[90%] object-cover"
                />
              </div>
            </div>

            <div className="absolute -top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                <span className="font-medium uppercase">Available for Work</span>
              </div>
            </div>

            <div className="absolute bottom-4 -left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="text-center">
                <span className="block text-2xl font-bold text-primary">5+</span>
                <span className="text-sm text-muted-foreground uppercase">Years Experience</span>
              </div>
            </div>
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
}