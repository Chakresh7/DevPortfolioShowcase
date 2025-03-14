import {
  type Project,
  type Service,
  type TeamMember,
  type FAQ,
  type Testimonial,
} from "@shared/schema";

export interface IStorage {
  getProjects(): Promise<Project[]>;
  getServices(): Promise<Service[]>;
  getTeamMembers(): Promise<TeamMember[]>;
  getFaqs(): Promise<FAQ[]>;
  getTestimonials(): Promise<Testimonial[]>;
}

export class MemStorage implements IStorage {
  private projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with React and Node.js",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop&q=60",
      category: "Web Development",
      link: "https://example.com/ecommerce",
    },
    {
      id: 2,
      title: "Customer Segmentation",
      description: "Machine learning model for customer segmentation and behavior analysis",
      image: "https://images.unsplash.com/photo-1501621667575-af81f1f0bacc?w=800&auto=format&fit=crop&q=60",
      category: "Machine Learning",
      link: "https://example.com/ml-segmentation",
    },
    {
      id: 3,
      title: "Sales Prediction",
      description: "Data science project for predicting future sales using time series analysis",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
      category: "Data Science",
      link: "https://example.com/sales-prediction",
    },
    {
      id: 4,
      title: "Mobile App Design",
      description: "UI/UX design for a mobile banking application",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&auto=format&fit=crop&q=60",
      category: "Figma",
      link: "https://example.com/app-design",
    },
    {
      id: 5,
      title: "Sentiment Analysis",
      description: "ML model for analyzing customer feedback and social media sentiment",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&auto=format&fit=crop&q=60",
      category: "Machine Learning",
      link: "https://example.com/sentiment",
    },
    {
      id: 6,
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for business analytics and insights",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
      category: "Data Science",
      link: "https://example.com/dashboard",
    }
  ];

  private services: Service[] = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom web applications built with modern technologies",
      icon: "code",
    },
    // Add more services...
  ];

  private teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "John Doe",
      role: "Lead Developer",
      image: "/team/john.svg",
    },
    {
      id: 2,
      name: "Chakreshkumar",
      role: "Senior Developer",
      image: "/team/chakresh.svg",
    },
    // Add more team members...
  ];

  private faqs: FAQ[] = [
    {
      id: 1,
      question: "What technologies do you use?",
      answer: "We use modern web technologies including React, Node.js, and more.",
    },
    // Add more FAQs...
  ];

  private testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Jane Smith",
      role: "CEO at TechCorp",
      content: "Exceptional work on our e-commerce platform. The attention to detail and modern design elements exceeded our expectations. The team's communication was outstanding throughout the project.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO at DataTech Solutions",
      content: "The machine learning solution developed for our customer segmentation has transformed how we understand our market. Their expertise in AI and data science is truly remarkable.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      role: "Product Manager at InnovateLabs",
      content: "The UI/UX design work for our mobile app was brilliant. They have a great eye for design and user experience. The final product has received amazing feedback from our users.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=60",
    }
  ];

  async getProjects(): Promise<Project[]> {
    return this.projects;
  }

  async getServices(): Promise<Service[]> {
    return this.services;
  }

  async getTeamMembers(): Promise<TeamMember[]> {
    return this.teamMembers;
  }

  async getFaqs(): Promise<FAQ[]> {
    return this.faqs;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return this.testimonials;
  }
}

export const storage = new MemStorage();
