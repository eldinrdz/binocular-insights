import { Link, useLocation } from "react-router-dom";
import { Github, FileText, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-7xl flex h-16 items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <Activity className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">Binocular</span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            to="/compare"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive("/compare") ? "text-foreground" : "text-muted-foreground"
            )}
          >
            Vergleich
          </Link>
          <Link
            to="/repo"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive("/repo") ? "text-foreground" : "text-muted-foreground"
            )}
          >
            Repository
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/inso-world/binocular"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a
              href="https://docs.lovable.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText className="h-4 w-4 mr-2" />
              Dokumentation
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};
