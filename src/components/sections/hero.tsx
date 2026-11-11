import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/social-links";
import { TypingText } from "@/components/typing-text";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[86svh] items-center overflow-hidden pt-28 pb-16 md:pt-32"
    >
      <div className="grid-bg pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="container grid items-center gap-8 md:grid-cols-[1.3fr_1fr] md:gap-14">
        <div className="order-2 text-center md:order-1 md:text-left">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-xs text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for opportunities
          </motion.p>

          <motion.h1
            id="hero-heading"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-5 font-mono text-sm text-primary sm:text-base"
          >
            <TypingText words={profile.typingRoles} />
          </motion.p>

          <motion.h2
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mx-auto mt-3 max-w-xl text-lg font-medium text-foreground/90 sm:text-xl md:mx-0"
          >
            {profile.headline}
          </motion.h2>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:mx-0"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.26 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start"
          >
            <Button asChild size="lg">
              <a href="#projects">
                View Projects
                <ArrowRight aria-hidden="true" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={profile.resumeUrl} download>
                <Download aria-hidden="true" />
                Download Resume
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href="#contact">
                <Mail aria-hidden="true" />
                Contact Me
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 md:justify-start"
          >
            <SocialLinks />
            <span className="hidden h-6 w-px bg-border sm:block" aria-hidden="true" />
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {profile.location}
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="order-1 flex justify-center md:order-2 md:justify-end"
        >
          <div className="relative">
            <div
              className="absolute -inset-2 rounded-full bg-primary/20 blur-xl"
              aria-hidden="true"
            />
            <div className="relative h-36 w-36 overflow-hidden rounded-full border-2 border-primary/40 bg-card shadow-[0_0_40px_-10px_hsl(var(--primary)/0.6)] sm:h-44 sm:w-44 lg:h-52 lg:w-52">
              <img
                src={profile.photoUrl}
                alt={`Portrait of ${profile.name}`}
                width={400}
                height={400}
                loading="eager"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
