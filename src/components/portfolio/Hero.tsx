import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <header id="home" className="relative overflow-hidden grid-backdrop">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-0 hidden h-[140%] w-[42%] -skew-x-12 border-l border-border bg-card/60 md:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[26rem] top-0 hidden h-[140%] w-20 -skew-x-12 bg-primary/10 md:block"
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-20 md:pt-28">
        <p className="label-mono mb-6 flex items-center gap-2 text-primary">
          <span className="size-1.5 rounded-full bg-primary" />
          Data Science &amp; AI Portfolio
        </p>

        <h1 className="font-display text-[clamp(2.75rem,9vw,7rem)] font-bold leading-[0.9] tracking-tighter">
          HI, I&apos;M
          <br />
          ANJALI
          <br />
          <span className="text-primary">PANDEY</span>
        </h1>

        <p className="mt-6 font-display text-lg font-medium tracking-tight md:text-xl">
          {profile.degree}
        </p>

        <div className="mt-6 grid items-end gap-8 md:grid-cols-2">
          <p className="max-w-md leading-relaxed text-muted-foreground">{profile.intro}</p>

          <div className="flex flex-wrap gap-3 md:justify-end">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-primary px-5 py-3 font-mono text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Explore My Work <ArrowDown className="size-3.5" />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 border border-border px-5 py-3 font-mono text-xs transition-colors hover:border-primary hover:text-primary"
            >
              <Download className="size-3.5" /> Download Resume
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="inline-flex items-center gap-2 border border-border px-4 py-3 font-mono text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Github className="size-3.5" /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="inline-flex items-center gap-2 border border-border px-4 py-3 font-mono text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Linkedin className="size-3.5" /> LinkedIn
            </a>
          </div>
        </div>

        <dl className="mt-14 flex flex-wrap gap-x-10 gap-y-4 font-mono text-xs text-muted-foreground">
          <div className="flex gap-2">
            <dt className="sr-only">Projects</dt>
            <dd>
              <span className="font-medium text-foreground">03</span> Projects
            </dd>
          </div>
          <div className="flex gap-2">
            <dt className="sr-only">Certificates</dt>
            <dd>
              <span className="font-medium text-foreground">07</span> Certificates
            </dd>
          </div>
          <div className="flex gap-2">
            <dt className="sr-only">University</dt>
            <dd>{profile.university}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="sr-only">Goal</dt>
            <dd className="text-primary">→ {profile.goal}</dd>
          </div>
        </dl>
      </div>
    </header>
  );
}
