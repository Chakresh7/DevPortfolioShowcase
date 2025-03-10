import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/projects", async (_req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  app.get("/api/services", async (_req, res) => {
    const services = await storage.getServices();
    res.json(services);
  });

  app.get("/api/team", async (_req, res) => {
    const team = await storage.getTeamMembers();
    res.json(team);
  });

  app.get("/api/faqs", async (_req, res) => {
    const faqs = await storage.getFaqs();
    res.json(faqs);
  });

  app.get("/api/testimonials", async (_req, res) => {
    const testimonials = await storage.getTestimonials();
    res.json(testimonials);
  });

  const httpServer = createServer(app);
  return httpServer;
}
