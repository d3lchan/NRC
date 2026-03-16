import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="relative py-8 px-6 md:px-12 lg:px-24">
      <Separator className="mb-8 bg-white/10" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span
            className="text-sm font-bold tracking-widest"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span style={{ color: "#E10600" }}>N</span>RC
          </span>
          <span className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Navasheen Roy Chowdhury
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://linkedin.com/in/navasheen-roy-chowdhury"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest text-muted-foreground hover:text-white transition-colors"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            LinkedIn
          </a>
          <a
            href="mailto:navasheenrc@gmail.com"
            className="text-xs uppercase tracking-widest text-muted-foreground hover:text-white transition-colors"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
