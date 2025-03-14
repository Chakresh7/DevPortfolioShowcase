import { MotionDiv, staggerContainer, fadeIn } from "@/components/ui/motion";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 mx-auto">
        <MotionDiv
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-12"
        >
          <MotionDiv variants={fadeIn} className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground">
              I'm a passionate developer with expertise in creating modern web applications
            </p>
          </MotionDiv>

          <MotionDiv variants={fadeIn}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Professional Background</h3>
                <p className="text-muted-foreground">
                  With over 2 years of experience in web development, I specialize in building
                  scalable and performant applications using modern technologies like React,
                  Node.js, and TypeScript.
                </p>
                <h3 className="text-xl font-semibold">My Approach</h3>
                <p className="text-muted-foreground">
                  I believe in writing clean, maintainable code and creating intuitive user
                  experiences. My goal is to deliver high-quality solutions that meet both user
                  needs and business objectives.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <img
                  src="/images/about.jpg"
                  alt="About Me"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
} 