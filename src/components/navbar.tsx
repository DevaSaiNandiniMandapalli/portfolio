import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { navItems, profile } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/use-active-section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sectionIds = navItems.map((n) => n.id);

interface NavbarProps {
  theme: "dark" | "light";
  toggleTheme: () => void;
}

export function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav
        aria-label="Primary"
        className="container flex h-16 items-center justify-between gap-4"
      >
        <a
          href="#hero"
          className="font-mono text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-primary"
        >
          <span className="text-primary">~/</span>devasainandini
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? "true" : undefined}
                className={cn(
                  "relative rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                  active === item.id && "text-foreground"
                )}
              >
                {item.label}
                {active === item.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-2 -bottom-px h-px bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Moon className="h-4 w-4" aria-hidden="true" />
            )}
          </Button>

          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={profile.resumeUrl} download>
              <Download aria-hidden="true" />
              <span>Download Resume</span>
            </a>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-haspopup="true"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-background/98 backdrop-blur-xl lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="container flex h-16 items-center justify-between">
              <span className="font-mono text-sm font-semibold">
                <span className="text-primary">~/</span>devasainandini
              </span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </Button>
            </div>
            <ul className="container mt-6 flex flex-col gap-1">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-md px-2 py-4 text-lg font-medium text-muted-foreground transition-colors hover:text-foreground",
                      active === item.id && "text-primary"
                    )}
                  >
                    {item.label}
                    <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="container mt-8">
              <Button asChild className="w-full" size="lg">
                <a href={profile.resumeUrl} download onClick={() => setOpen(false)}>
                  <Download aria-hidden="true" />
                  <span>Download Resume</span>
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
