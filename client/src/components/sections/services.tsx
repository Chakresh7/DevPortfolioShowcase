import { Card } from "@/components/ui/card";
import { MotionDiv, staggerContainer, fadeIn } from "@/components/ui/motion";
import { FaCode, FaPalette, FaLaptopCode } from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="w-8 h-8" />,
    title: "Developer",
    description: "Creating and maintaining web applications using modern technologies",
  },
  {
    icon: <FaPalette className="w-8 h-8" />,
    title: "UX/UI",
    description: "Designing intuitive and engaging user interfaces",
  },
  {
    icon: <FaLaptopCode className="w-8 h-8" />,
    title: "Design",
    description: "Creating visually appealing and functional designs",
  },
];

export function Services() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My Awesome</h2>
          <h3 className="text-4xl font-bold text-primary">Services</h3>
        </div>

        <MotionDiv
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <MotionDiv key={index} variants={fadeIn}>
              <Card className="p-6 hover:bg-primary/5 transition-colors">
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </section>
  );
}