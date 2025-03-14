import { MotionDiv, staggerContainer, fadeIn } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { Layers, Server, Code2, Database } from "lucide-react";

export default function FullStackDevelopment() {
  const features = [
    {
      icon: <Code2 className="w-12 h-12" />,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces using modern frameworks like React, Vue, and Angular.",
    },
    {
      icon: <Server className="w-12 h-12" />,
      title: "Backend Development",
      description: "Creating robust server-side applications with Node.js, Python, or Java, ensuring scalability and performance.",
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Database Management",
      description: "Designing and optimizing databases using SQL and NoSQL solutions for efficient data management.",
    },
    {
      icon: <Layers className="w-12 h-12" />,
      title: "API Development",
      description: "Building and integrating RESTful APIs to connect frontend and backend services seamlessly.",
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Full Stack Development Services</h1>
            <p className="text-muted-foreground text-lg mb-8">
              End-to-end development solutions for modern web applications, from user interface to server infrastructure.
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
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Comprehensive Full Stack Solutions</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Our full stack development services cover every aspect of your web application needs. We combine frontend and backend expertise to create seamless, efficient, and scalable solutions that drive your business forward.
                </p>
                <p className="text-muted-foreground">
                  With a deep understanding of both client-side and server-side technologies, we ensure your application is built with the best practices and latest technologies in mind.
                </p>
                <p className="text-muted-foreground">
                  Our full stack development expertise includes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Single Page Applications (SPA)</li>
                  <li>RESTful API Development</li>
                  <li>Database Design and Optimization</li>
                  <li>Cloud Infrastructure Setup</li>
                  <li>Authentication and Authorization</li>
                  <li>Performance Optimization</li>
                  <li>Testing and Quality Assurance</li>
                  <li>Deployment and DevOps</li>
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