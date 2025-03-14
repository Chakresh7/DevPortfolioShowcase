import { MotionDiv, staggerContainer, fadeIn } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { Palette, Users, Lightbulb, Eye } from "lucide-react";

export default function UIUXDesign() {
  const features = [
    {
      icon: <Users className="w-12 h-12" />,
      title: "User Research",
      description: "Understanding user needs and behaviors through research, interviews, and usability testing.",
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "User Experience Design",
      description: "Creating intuitive user flows and wireframes that enhance the overall user experience.",
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "UI Design",
      description: "Crafting beautiful and consistent user interfaces with modern design principles.",
    },
    {
      icon: <Eye className="w-12 h-12" />,
      title: "Visual Design",
      description: "Developing unique visual identities and design systems that reflect your brand.",
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto">
        <MotionDiv
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-12"
        >
          <MotionDiv variants={fadeIn} className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">UI/UX Design Services</h1>
            <p className="text-muted-foreground text-lg mb-8">
              Creating beautiful and intuitive digital experiences that users love and businesses thrive with.
            </p>
            <Button 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              Start Your Project
            </Button>
          </MotionDiv>

          <MotionDiv variants={fadeIn}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 md:p-8 rounded-lg border border-border hover:border-orange-500 transition-colors flex flex-col h-full"
                >
                  <div className="mb-6 text-orange-500">{feature.icon}</div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </MotionDiv>

          <MotionDiv variants={fadeIn} className="max-w-4xl mx-auto">
            <div className="bg-orange-50 rounded-lg p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Design That Makes a Difference</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Great design is more than just aesthetics. It's about creating meaningful experiences that solve real problems and delight users. Our UI/UX design process is thorough and user-centered, ensuring that every decision is made with your users in mind.
                </p>
                <p className="text-muted-foreground">
                  We combine creativity with strategic thinking to deliver designs that not only look beautiful but also achieve your business objectives.
                </p>
                <p className="text-muted-foreground">
                  Our UI/UX design services include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>User Research and Analysis</li>
                  <li>User Persona Development</li>
                  <li>Information Architecture</li>
                  <li>Wireframing and Prototyping</li>
                  <li>Visual Design and Branding</li>
                  <li>Interaction Design</li>
                  <li>Usability Testing</li>
                  <li>Design System Creation</li>
                </ul>
              </div>
            </div>
          </MotionDiv>

          <MotionDiv variants={fadeIn} className="text-center">
            <Button 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              Get Started
            </Button>
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
} 