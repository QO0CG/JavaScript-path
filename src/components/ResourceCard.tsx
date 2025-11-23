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
    <div className="group relative bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 scroll-reveal floating-card">
      {/* Enhanced Gradient Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Image with Enhanced Height */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-80" />
      </div>

      {/* Content with Enhanced Spacing */}
      <div className="relative p-8 space-y-5">
        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
          {name}
        </h3>
        
        <p className="text-base text-muted-foreground leading-relaxed line-clamp-3 min-h-[4.5rem]">
          {description}
        </p>

        <Button
          asChild
          variant="default"
          size="lg"
          className="w-full rounded-full transition-all duration-300 group-hover:translate-y-[-2px] text-base font-semibold"
          style={{
            boxShadow: 'var(--button-shadow-light)'
          }}
        >
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3"
          >
            <span>زيارة الموقع</span>
            <ExternalLink className="h-5 w-5" />
          </a>
        </Button>
      </div>

      {/* Enhanced Glow Effect */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute -inset-[1px] bg-gradient-to-r from-accent/20 via-primary/20 to-accent-glow/20 rounded-3xl blur-lg" />
      </div>
    </div>
  );
}
