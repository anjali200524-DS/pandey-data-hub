import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { profile } from "@/data/portfolio";
import { Reveal, Section } from "./Section";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  subject: z.string().trim().min(2, "Please add a subject").max(150),
  message: z.string().trim().min(10, "Message should be at least 10 characters").max(1000),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const fieldClass =
  "mt-1.5 w-full border border-border bg-elevated px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary";

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const result = schema.safeParse(data);

    if (!result.success) {
      const next: Errors = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      });
      setErrors(next);
      return;
    }

    setErrors({});
    const { subject, name, email, message } = result.data;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`;
    toast.success("Opening your email app with the message ready to send.");
    form.reset();
  };

  return (
    <Section id="contact" label="08 / contact" title="Contact">
      <div className="grid gap-6 md:grid-cols-12">
        <Reveal className="md:col-span-7">
          <form onSubmit={onSubmit} noValidate className="surface-card p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="label-mono">
                  Full name
                </label>
                <input id="name" name="name" type="text" className={fieldClass} />
                {errors.name ? (
                  <p className="mt-1 text-xs text-destructive">{errors.name}</p>
                ) : null}
              </div>
              <div>
                <label htmlFor="email" className="label-mono">
                  Email address
                </label>
                <input id="email" name="email" type="email" className={fieldClass} />
                {errors.email ? (
                  <p className="mt-1 text-xs text-destructive">{errors.email}</p>
                ) : null}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="subject" className="label-mono">
                  Subject
                </label>
                <input id="subject" name="subject" type="text" className={fieldClass} />
                {errors.subject ? (
                  <p className="mt-1 text-xs text-destructive">{errors.subject}</p>
                ) : null}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="label-mono">
                  Message
                </label>
                <textarea id="message" name="message" rows={4} className={`${fieldClass} resize-none`} />
                {errors.message ? (
                  <p className="mt-1 text-xs text-destructive">{errors.message}</p>
                ) : null}
              </div>
            </div>
            <button
              type="submit"
              className="mt-5 bg-primary px-5 py-3 font-mono text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Send Message
            </button>
          </form>
        </Reveal>

        <Reveal className="md:col-span-5" delay={80}>
          <div className="surface-card h-full p-6">
            <p className="label-mono mb-4">Reach me</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-primary"
                >
                  <Mail className="size-4 text-primary" /> {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-primary"
                >
                  <Github className="size-4 text-primary" /> GitHub
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-primary"
                >
                  <Linkedin className="size-4 text-primary" /> LinkedIn
                </a>
              </li>
            </ul>
            <p className="label-mono mt-6 leading-relaxed">
              Email and social links are placeholders — replace them with your own.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
