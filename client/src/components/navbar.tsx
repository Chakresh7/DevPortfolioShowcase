import { Link } from "wouter";

export function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <a className="text-xl font-bold">Portfolio</a>
          </Link>
          <div className="flex gap-6">
            <Link href="/">
              <a className="hover:text-primary">Home</a>
            </Link>
            <Link href="/#services">
              <a className="hover:text-primary">Services</a>
            </Link>
            <Link href="/#projects">
              <a className="hover:text-primary">Projects</a>
            </Link>
            <Link href="/#contact">
              <a className="hover:text-primary">Contact</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 