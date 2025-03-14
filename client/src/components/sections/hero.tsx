import { Button } from "@/components/ui/button";
import { MotionDiv, staggerContainer, fadeIn } from "@/components/ui/motion";
import { Counter } from "@/components/ui/counter";
import { Github, Linkedin, Instagram } from "lucide-react";

export function Hero() {
  // Replace these with your actual social media links
  const socialLinks = {
    github: "#", // Add your GitHub link here
    linkedin: "#", // Add your LinkedIn link here
    instagram: "#", // Add your Instagram link here
  };

  return (
    <section className="min-h-screen flex items-center pt-16 px-4 bg-white">
      <div className="container mx-auto">
        <MotionDiv
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-4xl mx-auto text-center space-y-8 md:space-y-12"
        >
          <MotionDiv variants={fadeIn}>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black leading-tight">
              MY JOB IS TO TURN YOUR IDEAS IN TO REALITY
            </h1>
          </MotionDiv>

          <MotionDiv variants={fadeIn}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-black hover:bg-black/90 text-white w-full sm:w-auto"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                VIEW PROJECTS
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-black hover:bg-black/5 w-full sm:w-auto"
                onClick={() => {
                  // Create a link element
                  const link = document.createElement('a');
                  link.href = '/assets/resume.pdf'; // Update this path to match your resume file
                  link.target = '_blank';
                  link.download = 'Chakreshkumar_Resume.pdf'; // The name for the downloaded file
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                VIEW RESUME
              </Button>
            </div>
          </MotionDiv>

          <MotionDiv variants={fadeIn}>
            <div className="flex justify-center gap-6 mb-8">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </MotionDiv>

          <MotionDiv variants={fadeIn}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 pt-8">
              <div className="text-center">
                <span className="block text-3xl md:text-4xl font-bold text-primary">
                  <Counter end={2} suffix="+" />
                </span>
                <span className="text-sm text-black uppercase mt-2 block">Years Experience</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl md:text-4xl font-bold text-primary">
                  <Counter end={60} suffix="+" />
                </span>
                <span className="text-sm text-black uppercase mt-2 block">Projects Completed</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl md:text-4xl font-bold text-primary">
                  <Counter end={32} suffix="+" />
                </span>
                <span className="text-sm text-black uppercase mt-2 block">Happy Clients</span>
              </div>
            </div>
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
}