import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Achievements } from "@/components/sections/achievements";
import { Certifications } from "@/components/sections/certifications";
import { TryHackMeStrip } from "@/components/sections/tryhackme-strip";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { useTheme } from "@/hooks/use-theme";

function App() {
  const { theme, toggle } = useTheme();

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Navbar theme={theme} toggleTheme={toggle} />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Certifications />
        <TryHackMeStrip />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
