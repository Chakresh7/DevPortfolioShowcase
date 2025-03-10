import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MotionDiv, staggerContainer, fadeIn } from "@/components/ui/motion";
import type { Project } from "@shared/schema";

export function Projects() {
  const [category, setCategory] = useState<string | null>(null);
  const { data: projects, isLoading } = useQuery<Project[]>({ 
    queryKey: ["/api/projects"]
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const filteredProjects = category
    ? projects?.filter((p) => p.category === category)
    : projects;

  const categories = [...new Set(projects?.map((p) => p.category))];

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Projects</h2>
        
        <div className="flex gap-4 justify-center mb-12">
          <Button
            variant={category === null ? "default" : "outline"}
            onClick={() => setCategory(null)}
          >
            All
          </Button>
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={category === cat ? "default" : "outline"}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>

        <MotionDiv
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects?.map((project) => (
            <MotionDiv key={project.id} variants={fadeIn}>
              <Card className="h-full">
                <CardHeader>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  {project.link && (
                    <Button
                      variant="outline"
                      onClick={() => window.open(project.link, "_blank")}
                    >
                      View Project
                    </Button>
                  )}
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </section>
  );
}
