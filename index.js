// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
var MemStorage = class {
  projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with React and Node.js",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop&q=60",
      category: "Web Development",
      link: "https://example.com/ecommerce"
    },
    {
      id: 2,
      title: "Customer Segmentation",
      description: "Machine learning model for customer segmentation and behavior analysis",
      image: "https://images.unsplash.com/photo-1501621667575-af81f1f0bacc?w=800&auto=format&fit=crop&q=60",
      category: "Machine Learning",
      link: "https://example.com/ml-segmentation"
    },
    {
      id: 3,
      title: "Sales Prediction",
      description: "Data science project for predicting future sales using time series analysis",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
      category: "Data Science",
      link: "https://example.com/sales-prediction"
    },
    {
      id: 4,
      title: "Mobile App Design",
      description: "UI/UX design for a mobile banking application",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&auto=format&fit=crop&q=60",
      category: "Figma",
      link: "https://example.com/app-design"
    },
    {
      id: 5,
      title: "Sentiment Analysis",
      description: "ML model for analyzing customer feedback and social media sentiment",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&auto=format&fit=crop&q=60",
      category: "Machine Learning",
      link: "https://example.com/sentiment"
    },
    {
      id: 6,
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for business analytics and insights",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
      category: "Data Science",
      link: "https://example.com/dashboard"
    }
  ];
  services = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom web applications built with modern technologies",
      icon: "code"
    }
    // Add more services...
  ];
  teamMembers = [
    {
      id: 1,
      name: "John Doe",
      role: "Lead Developer",
      image: "/team/john.svg"
    },
    {
      id: 2,
      name: "Chakreshkumar",
      role: "Senior Developer",
      image: "/team/chakresh.svg"
    }
    // Add more team members...
  ];
  faqs = [
    {
      id: 1,
      question: "What technologies do you use?",
      answer: "We use modern web technologies including React, Node.js, and more."
    }
    // Add more FAQs...
  ];
  testimonials = [
    {
      id: 1,
      name: "Jane Smith",
      role: "CEO at TechCorp",
      content: "Exceptional work on our e-commerce platform. The attention to detail and modern design elements exceeded our expectations. The team's communication was outstanding throughout the project.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO at DataTech Solutions",
      content: "The machine learning solution developed for our customer segmentation has transformed how we understand our market. Their expertise in AI and data science is truly remarkable.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60"
    },
    {
      id: 3,
      name: "Sarah Johnson",
      role: "Product Manager at InnovateLabs",
      content: "The UI/UX design work for our mobile app was brilliant. They have a great eye for design and user experience. The final product has received amazing feedback from our users.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=60"
    }
  ];
  async getProjects() {
    return this.projects;
  }
  async getServices() {
    return this.services;
  }
  async getTeamMembers() {
    return this.teamMembers;
  }
  async getFaqs() {
    return this.faqs;
  }
  async getTestimonials() {
    return this.testimonials;
  }
};
var storage = new MemStorage();

// server/routes.ts
async function registerRoutes(app2) {
  app2.get("/api/projects", async (_req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });
  app2.get("/api/services", async (_req, res) => {
    const services = await storage.getServices();
    res.json(services);
  });
  app2.get("/api/team", async (_req, res) => {
    const team = await storage.getTeamMembers();
    res.json(team);
  });
  app2.get("/api/faqs", async (_req, res) => {
    const faqs = await storage.getFaqs();
    res.json(faqs);
  });
  app2.get("/api/testimonials", async (_req, res) => {
    const testimonials = await storage.getTestimonials();
    res.json(testimonials);
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2, { dirname as dirname2 } from "path";
import { fileURLToPath as fileURLToPath2 } from "url";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path, { dirname } from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";
var __filename = fileURLToPath(import.meta.url);
var __dirname = dirname(__filename);
var vite_config_default = defineConfig({
  base: "/DevPortfolioShowcase/",
  plugins: [
    react(),
    runtimeErrorOverlay(),
    themePlugin(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared")
    }
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var __filename2 = fileURLToPath2(import.meta.url);
var __dirname2 = dirname2(__filename2);
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        __dirname2,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(__dirname2, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 8080;
  server.listen(port, () => {
    log(`serving on port ${port}`);
  });
})();
