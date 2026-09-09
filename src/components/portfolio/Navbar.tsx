import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5"
      >
        <a href="#home" className="flex items-center gap-2">
          <span className="grid size-7 place-items-center bg-primary font-display text-sm font-bold text-primary-foreground">
            A
          </span>
          <span className="font-display font-semibold tracking-tight">
            Anjali<span className="text-primary">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-6 font-mono text-xs text-muted-foreground lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-primary">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={`mailto:${profile.email}`}
            className="hidden bg-primary px-4 py-2 font-mono text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:inline-block"
          >
            Get in touch
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-9 items-center justify-center border border-border text-foreground lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-border bg-background lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border py-3 font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
