import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <a className="text-lg font-bold text-primary">CV</a>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#services">
              <a className="text-sm font-medium hover:text-primary transition-colors">SERVICES</a>
            </Link>
            <Link href="#projects">
              <a className="text-sm font-medium hover:text-primary transition-colors">PROJECTS</a>
            </Link>
            <Link href="#contact">
              <a className="text-sm font-medium hover:text-primary transition-colors">CONTACT</a>
            </Link>
          </nav>

          <Button variant="outline" size="sm">
            GET IN TOUCH
          </Button>
        </div>
      </div>
    </header>
  );
}
