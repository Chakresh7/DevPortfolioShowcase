import { Card } from "@/components/ui/card";
import { MotionDiv, staggerContainer, fadeIn } from "@/components/ui/motion";
import { Code2, Globe, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Web Development",
    description: "Building responsive and scalable web applications using modern technologies",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Full Stack Development",
    description: "End-to-end development from database design to user interface",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "Creating intuitive and engaging user experiences",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 mx-auto">
        <MotionDiv
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-12"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-lg font-medium text-primary mb-2">MY AWESOME</h2>
            <h3 className="text-3xl font-bold mb-4">SERVICES</h3>
            <p className="text-muted-foreground uppercase">
              Delivering high-quality digital solutions and exceptional user experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <MotionDiv key={index} variants={fadeIn}>
                <Card className="p-6 h-full bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300">
                  <div className="text-primary mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2 uppercase">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button variant="outline" className="w-full uppercase">
                    Learn More
                  </Button>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}