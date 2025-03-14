import { MotionDiv, staggerContainer, fadeIn } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { Code2, Database, Layout, Zap } from "lucide-react";

export default function WebDevelopment() {
  const features = [
    {
      icon: <Layout className="w-12 h-12" />,
      title: "Responsive Design",
      description: "Creating websites that look and function perfectly on all devices, from mobile phones to desktop computers.",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Performance Optimization",
      description: "Implementing best practices to ensure your website loads quickly and runs smoothly for the best user experience.",
    },
    {
      icon: <Code2 className="w-12 h-12" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code following modern development standards.",
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "SEO Friendly",
      description: "Building websites with search engine optimization in mind to help improve your online visibility.",
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Web Development Services</h1>
            <p className="text-muted-foreground text-lg mb-8">
              Creating modern, responsive, and user-friendly websites that help businesses grow online.
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
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Choose Our Web Development Services?</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  With years of experience in web development, we understand what it takes to create a successful online presence. Our team uses the latest technologies and best practices to deliver websites that not only look great but also perform exceptionally well.
                </p>
                <p className="text-muted-foreground">
                  We specialize in creating custom solutions tailored to your specific needs, whether you're a small business looking for a simple website or a large enterprise requiring a complex web application.
                </p>
                <p className="text-muted-foreground">
                  Our development process is transparent and collaborative, ensuring you're involved every step of the way. We focus on delivering value through:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Custom website development</li>
                  <li>E-commerce solutions</li>
                  <li>Content Management Systems (CMS)</li>
                  <li>Progressive Web Applications (PWA)</li>
                  <li>API integration and development</li>
                  <li>Website maintenance and support</li>
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