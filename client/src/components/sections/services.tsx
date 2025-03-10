import { Card } from "@/components/ui/card";
import { MotionDiv, staggerContainer, fadeIn } from "@/components/ui/motion";
import { Code2, Palette, Globe } from "lucide-react";

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
    <section className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <MotionDiv
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold">My Services</h2>
            <p className="mt-4 text-muted-foreground">
              Expertise in delivering comprehensive digital solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <MotionDiv key={index} variants={fadeIn}>
                <Card className="p-6 h-full hover:shadow-lg transition-shadow bg-background">
                  <div className="text-primary mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}