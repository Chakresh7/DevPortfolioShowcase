import { useQuery } from "@tanstack/react-query";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { MotionDiv, staggerContainer, fadeIn } from "@/components/ui/motion";
import type { Service } from "@shared/schema";
import { LucideIcon, Code, Smartphone, Palette } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  code: Code,
  smartphone: Smartphone,
  palette: Palette,
};

export function Services() {
  const { data: services, isLoading } = useQuery<Service[]>({ 
    queryKey: ["/api/services"]
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="py-20 bg-muted">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <MotionDiv
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services?.map((service) => {
            const Icon = icons[service.icon] || Code;
            return (
              <MotionDiv
                key={service.id}
                variants={fadeIn}
                className="group"
              >
                <Card className="h-full transition-transform duration-300 group-hover:scale-105">
                  <CardHeader>
                    <Icon className="h-8 w-8 mb-4 text-primary" />
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </MotionDiv>
            );
          })}
        </MotionDiv>
      </div>
    </section>
  );
}
