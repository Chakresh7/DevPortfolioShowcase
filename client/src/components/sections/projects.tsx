import { useEffect, useState } from "react";
import { MotionDiv, staggerContainer, fadeIn } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/types";
import { ExternalLink, Github } from "lucide-react";

const projectLinks = {
  "E-Commerce Platform": {
    demo: "https://example.com/ecommerce",
    github: "https://github.com/Chakresh7/ecommerce-platform"
  },
  "Customer Segmentation": {
    demo: "https://example.com/ml-segmentation",
    github: "https://github.com/Chakresh7/customer-segmentation"
  },
  "Sales Prediction": {
    demo: "https://example.com/sales-prediction",
    github: "https://github.com/Chakresh7/sales-prediction"
  },
  "Mobile App Design": {
    demo: "https://example.com/app-design",
    github: "https://github.com/Chakresh7/mobile-app-design"
  },
  "Sentiment Analysis": {
    demo: "https://example.com/sentiment",
    github: "https://github.com/Chakresh7/sentiment-analysis"
  },
  "Data Visualization Dashboard": {
    demo: "https://example.com/dashboard",
    github: "https://github.com/Chakresh7/data-dashboard"
  }
};

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        // Extract unique categories and add "All"
        const uniqueCategories = ["All", ...new Set(data.map((p: Project) => p.category))];
        setCategories(uniqueCategories);
      })
      .catch(console.error);
  }, []);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-16 md:py-24 px-4 bg-muted/50">
      <div className="container mx-auto">
        <MotionDiv
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-12"
        >
          <MotionDiv variants={fadeIn} className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Projects</h2>
            <p className="text-muted-foreground text-sm sm:text-base mb-8">
              Check out some of my latest projects and work
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={
                    selectedCategory === category
                      ? "bg-orange-500 hover:bg-orange-600 text-white border-none"
                      : "border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors"
                  }
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </MotionDiv>

          <MotionDiv variants={fadeIn}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group relative overflow-hidden rounded-lg border border-border bg-white hover:border-orange-500 transition-all duration-300 hover:shadow-lg flex flex-col h-full"
                >
                  <div 
                    className="aspect-video w-full overflow-hidden cursor-pointer"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      window.location.reload();
                      window.open(projectLinks[project.title]?.demo || project.link, "_blank");
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {project.description}
                      </p>
                      <Badge 
                        variant="secondary"
                        className="bg-orange-100 text-orange-700 hover:bg-orange-200"
                      >
                        {project.category}
                      </Badge>
                    </div>
                    <div className="flex gap-4 mt-6">
                      <Button
                        variant="default"
                        className="flex-1 bg-orange-500 hover:bg-orange-600 text-white transition-colors duration-300"
                        onClick={() => {
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                          window.location.reload();
                          window.open(projectLinks[project.title]?.demo || project.link, "_blank");
                        }}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 border-orange-500 text-orange-500 hover:bg-orange-50 transition-colors duration-300"
                        onClick={() => {
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                          window.location.reload();
                          window.open(projectLinks[project.title]?.github, "_blank");
                        }}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
}