import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ icon: Icon, title, description, className }: FeatureCardProps) {
  return (
    <div className={cn("flex flex-col items-center space-y-2 p-6 bg-background rounded-lg shadow-lg", className)}>
      <Icon className="h-12 w-12 text-primary" />
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-center text-muted-foreground">
        {description}
      </p>
    </div>
  );
}