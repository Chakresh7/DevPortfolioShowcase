import { useQuery } from "@tanstack/react-query";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { MotionDiv, staggerContainer, fadeIn } from "@/components/ui/motion";
import type { TeamMember } from "@shared/schema";

export function Team() {
  const { data: team, isLoading } = useQuery<TeamMember[]>({ 
    queryKey: ["/api/team"]
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
        <MotionDiv
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {team?.map((member) => (
            <MotionDiv key={member.id} variants={fadeIn}>
              <Card className="text-center">
                <CardHeader>
                  <Avatar className="h-32 w-32 mx-auto mb-4">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.name[0]}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </CardHeader>
              </Card>
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </section>
  );
}
