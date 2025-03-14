import { MotionDiv, staggerContainer, fadeIn } from "@/components/ui/motion";
import { Code2, Palette, Layers } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      icon: <Code2 className="w-12 h-12" />,
      title: "Web Development",
      description: "Building responsive and performant web applications using modern technologies.",
      link: "/services/web-development"
    },
    {
      icon: <Layers className="w-12 h-12" />,
      title: "Full Stack Development",
      description: "End-to-end development solutions from database to user interface.",
      link: "/services/full-stack"
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user experiences that delight users.",
      link: "/services/ui-ux-design"
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <MotionDiv
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-12"
        >
          <MotionDiv variants={fadeIn} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Services I Offer</h2>
            <p className="text-muted-foreground text-lg">
              Specialized in creating modern web applications with cutting-edge technologies
            </p>
          </MotionDiv>

          <MotionDiv variants={fadeIn}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => (
                <Link key={index} href={service.link}>
                  <a className="block p-6 md:p-8 rounded-lg border border-border hover:border-orange-500 transition-colors cursor-pointer">
                    <div className="mb-6 text-orange-500">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </a>
                </Link>
              ))}
            </div>
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
}