import { Button } from "@/components/ui/button";
import { MotionDiv, staggerContainer, fadeIn } from "@/components/ui/motion";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-white">
      <div className="container px-4 mx-auto">
        <MotionDiv
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <MotionDiv variants={fadeIn}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              MY JOB IS TO TURN YOUR IDEAS IN TO REALITY
            </h1>
          </MotionDiv>

          <MotionDiv variants={fadeIn}>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-black hover:bg-black/90 text-white"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                VIEW PROJECTS
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-black hover:bg-black/5"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                HIRE ME
              </Button>
            </div>
          </MotionDiv>

          <MotionDiv variants={fadeIn} className="flex justify-center gap-12 pt-12">
            <div>
              <span className="block text-4xl font-bold text-primary">02+</span>
              <span className="text-sm text-muted-foreground uppercase">Years Experience</span>
            </div>
            <div>
              <span className="block text-4xl font-bold text-primary">60+</span>
              <span className="text-sm text-muted-foreground uppercase">Projects Completed</span>
            </div>
            <div>
              <span className="block text-4xl font-bold text-primary">32+</span>
              <span className="text-sm text-muted-foreground uppercase">Happy Clients</span>
            </div>
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
}