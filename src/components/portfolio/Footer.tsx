import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 sm:flex-row">
        <p className="font-display text-sm font-medium tracking-tight">
          {profile.name} — Data Science &amp; AI
        </p>
        <p className="label-mono">{profile.university}</p>
        <a href="#home" className="label-mono transition-colors hover:text-primary">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
