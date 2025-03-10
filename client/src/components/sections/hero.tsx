import { Button } from "@/components/ui/button";
import { MotionSection, fadeIn } from "@/components/ui/motion";

export function Hero() {
  return (
    <MotionSection
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeIn}
      className="min-h-screen flex items-center justify-center bg-background text-foreground"
    >
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Digital Solutions for Modern Business
          </h1>
          <p className="text-xl mb-8 text-muted-foreground">
            We create innovative digital experiences that drive growth and success
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground">
            Start a Project
          </Button>
        </div>
      </div>
    </MotionSection>
  );
}
