import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { MotionDiv, staggerContainer, fadeIn } from "@/components/ui/motion";
import { Target, Users, Zap, Shield } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "We focus on achieving measurable results for our clients",
  },
  {
    icon: Users,
    title: "User-Centric",
    description: "Every solution is designed with the end-user in mind",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We stay ahead with cutting-edge technologies",
  },
  {
    icon: Shield,
    title: "Security",
    description: "Your data security is our top priority",
  },
];

export function Values() {
  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <MotionDiv
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <MotionDiv key={index} variants={fadeIn}>
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="mx-auto">
                      <Icon className="h-12 w-12 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
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
