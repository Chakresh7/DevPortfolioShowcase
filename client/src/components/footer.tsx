export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Your Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 