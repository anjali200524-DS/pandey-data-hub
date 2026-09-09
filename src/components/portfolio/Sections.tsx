import { Download, ExternalLink, Github, GraduationCap } from "lucide-react";
import certificatePlaceholder from "@/assets/certificate-placeholder.jpg";
import resumePreview from "@/assets/resume-preview.jpg";
import {
  activities,
  certificates,
  education,
  profile,
  projects,
  skillGroups,
} from "@/data/portfolio";
import { Reveal, Section } from "./Section";

export function About() {
  return (
    <Section id="about" label="01 / about" title="About Me">
      <Reveal>
        <div className="grid gap-8 md:grid-cols-12">
          <p className="text-pretty leading-relaxed text-muted-foreground md:col-span-8">
            {profile.about}
          </p>
          <div className="surface-card p-6 md:col-span-4">
            <p className="label-mono mb-3">Career goal</p>
            <p className="font-display text-lg font-semibold tracking-tight">{profile.goal}</p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" label="02 / education" title="Education">
      <div className="grid gap-4 md:grid-cols-2">
        {education.map((item, i) => (
          <Reveal key={item.course} delay={i * 80}>
            <article className="surface-card flex h-full gap-4 p-6">
              <GraduationCap className="size-5 shrink-0 text-primary" />
              <div>
                <h3 className="font-display text-lg font-semibold tracking-tight">{item.course}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.institution}</p>
                <p className="label-mono mt-3">{item.note}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" label="03 / skills" title="Skills" meta="5 groups">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={i * 60}>
            <article className="surface-card h-full p-6">
              <p className="label-mono text-primary">{group.label}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border border-border bg-elevated px-3 py-1.5 text-sm text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Projects() {
  return (
    <Section id="projects" label="04 / projects" title="Projects" meta="03 builds">
      <div className="grid gap-5 md:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 80}>
            <article className="surface-card flex h-full flex-col p-6">
              <span className="label-mono">{project.index}</span>
              <h3 className="mt-4 font-display text-lg font-semibold tracking-tight">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <ul className="my-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <li key={tech} className="bg-elevated px-2 py-1 font-mono text-[11px]">
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="flex gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-1.5 bg-primary px-3 py-2 font-mono text-[11px] font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <Github className="size-3" /> GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-1.5 border border-border px-3 py-2 font-mono text-[11px] text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <ExternalLink className="size-3" /> Live Demo
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Certificates() {
  return (
    <Section
      id="certificates"
      label="05 / certificates"
      title="Certificates &amp; Achievements"
      meta="07 items"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, i) => (
          <Reveal key={cert.title} delay={i * 50}>
            <article className="surface-card flex h-full flex-col p-4">
              <img
                src={cert.image || certificatePlaceholder}
                alt={`${cert.title} certificate`}
                loading="lazy"
                width={640}
                height={512}
                className="aspect-[4/3] w-full border border-border object-cover"
              />
              <h3 className="mt-4 font-display text-base font-semibold tracking-tight">
                {cert.title}
              </h3>
              <p className="label-mono mt-1">{cert.issuer}</p>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {cert.description}
              </p>
              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-1.5 border border-border px-3 py-2 font-mono text-[11px] transition-colors hover:border-primary hover:text-primary"
              >
                View Certificate <ExternalLink className="size-3" />
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" label="06 / experience" title="Experience &amp; Activities">
      <ol className="ml-1 border-l border-border pl-6">
        {activities.map((item, i) => (
          <li key={item.title} className="relative pb-8 last:pb-0">
            <span className="absolute -left-[31px] top-1.5 size-2.5 rounded-full bg-primary ring-4 ring-background" />
            <Reveal delay={i * 70}>
              <div className="surface-card p-5">
                <h3 className="font-display text-base font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Resume() {
  return (
    <Section id="resume" label="07 / resume" title="Resume">
      <Reveal>
        <div className="grid gap-6 md:grid-cols-12">
          <div className="surface-card p-4 md:col-span-4">
            <img
              src={resumePreview}
              alt="Preview of Anjali Pandey's resume"
              loading="lazy"
              width={768}
              height={1024}
              className="aspect-[3/4] w-full border border-border object-cover"
            />
          </div>
          <div className="flex flex-col justify-center md:col-span-8">
            <p className="max-w-md leading-relaxed text-muted-foreground">
              A one-page summary of my education, skills, projects and activities. Add your PDF to
              the project and the download button will serve it.
            </p>
            <div>
              <a
                href={profile.resumeUrl}
                download
                className="mt-6 inline-flex items-center gap-2 bg-primary px-5 py-3 font-mono text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Download className="size-3.5" /> Download Resume
              </a>
            </div>
            <p className="label-mono mt-4">Resume file path is a placeholder — replace it.</p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
