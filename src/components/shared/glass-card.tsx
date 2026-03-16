import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function GlassCard({ children, className, hoverEffect = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass rounded-xl p-6",
        hoverEffect && "transition-all duration-300 glass-hover hover:translate-y-[-2px]",
        className
      )}
    >
      {children}
    </div>
  );
}
