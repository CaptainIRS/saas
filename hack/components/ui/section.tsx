import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

export function Section({ children, className, ...props }: SectionProps) {
  return (
    <section 
      className={cn("py-12", className)}
      {...props}
    >
      <div className="container px-4 md:px-6" style={{marginInline:"auto"}}> 
        {children}
      </div>
    </section>
  );
}