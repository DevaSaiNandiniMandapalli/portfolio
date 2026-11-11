import { useState, type FormEvent } from "react";
import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { profile } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${name || "a visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-24 py-16 sm:py-20 md:py-24">
      <div className="container">
        <SectionHeading
          id="contact"
          eyebrow="07 — Contact"
          title="Let's talk security"
          description="Open to full-time roles, internships and collaborations in SOC operations, threat hunting and security engineering. Reach out directly or use the form."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal className="space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="card-surface flex items-center gap-4 p-5"
            >
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Mail className="h-4 w-4" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Email
                </p>
                <p className="truncate text-sm font-medium">{profile.email}</p>
              </div>
            </a>

            <a href={`tel:${profile.phoneHref}`} className="card-surface flex items-center gap-4 p-5">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Phone className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Phone
                </p>
                <p className="text-sm font-medium">{profile.phone}</p>
              </div>
            </a>

            <div className="card-surface flex items-center gap-4 p-5">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                <MapPin className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Location
                </p>
                <p className="text-sm font-medium">{profile.location}</p>
              </div>
            </div>

            <Button asChild variant="outline" className="w-full">
              <a
                href="https://www.linkedin.com/in/devasainandini-cyber/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin aria-hidden="true" />
                Connect on LinkedIn
              </a>
            </Button>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="card-surface space-y-5 p-6" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none transition-colors focus-visible:border-primary"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none transition-colors focus-visible:border-primary"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full resize-y rounded-md border border-input bg-background px-3 py-2 text-sm outline-none transition-colors focus-visible:border-primary"
                  placeholder="Tell me about the role or project…"
                />
              </div>

              <Button type="submit" className="w-full sm:w-auto">
                <Send aria-hidden="true" />
                Send message
              </Button>
              <p className="text-xs text-muted-foreground">
                This opens your email client with the message pre-filled — no data is stored.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
