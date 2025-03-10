import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <a className="text-2xl font-bold">M</a>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#about">
              <a className="text-sm hover:text-primary transition-colors uppercase"
                 onClick={(e) => {
                   e.preventDefault();
                   document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                 }}>
                About
              </a>
            </Link>
            <Link href="#process">
              <a className="text-sm hover:text-primary transition-colors uppercase"
                 onClick={(e) => {
                   e.preventDefault();
                   document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' });
                 }}>
                Process
              </a>
            </Link>
            <Link href="#services">
              <a className="text-sm hover:text-primary transition-colors uppercase"
                 onClick={(e) => {
                   e.preventDefault();
                   document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                 }}>
                Services
              </a>
            </Link>
            <Link href="#projects">
              <a className="text-sm hover:text-primary transition-colors uppercase"
                 onClick={(e) => {
                   e.preventDefault();
                   document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                 }}>
                Projects
              </a>
            </Link>
          </nav>

          <Button 
            variant="outline" 
            size="sm"
            className="uppercase"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Talk
          </Button>
        </div>
      </div>
    </header>
  );
}