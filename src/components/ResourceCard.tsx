import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

interface ResourceCardProps {
  name: string;
  description: string;
  url: string;
  image: string;
}

export function ResourceCard({ name, description, url, image }: ResourceCardProps) {
  return (
    <div className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in hover:shadow-hover">
      {/* Gradient Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="relative p-6 space-y-4">
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {name}
        </h3>
        
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {description}
        </p>

        <Button
          asChild
          variant="default"
          size="sm"
          className="w-full rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 group-hover:translate-y-[-2px]"
        >
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <span>زيارة الموقع</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute -inset-[1px] bg-gradient-to-r from-accent via-primary to-accent-glow rounded-2xl blur-sm opacity-30" />
      </div>
    </div>
  );
}
