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
      image: "/projects/ecommerce.svg",
      category: "Web Development",
      link: "https://example.com/ecommerce",
    },
    // Add more projects...
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
      content: "Excellent work and communication throughout the project.",
      image: "/testimonials/jane.svg",
    },
    // Add more testimonials...
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
