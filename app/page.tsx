"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChevronUp,
  CodeXml,
  Palette,
  Server,
  Settings,
  Globe,
  ArrowRight,
  LucideSettings,
} from "lucide-react";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { FloatingNav } from "@/components/floating-nav";
import { Timeline } from "@/components/timeline";
import { InfoCard } from "@/components/info-card";
import { ContactCard } from "@/components/contact-card";
import { GridBackground } from "@/components/grid-background";
import { useIsMobile } from "@/components/ui/use-mobile";
import { skillsets, experiences, projects } from "./content";

export default function Portfolio() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { scrollY } = useScroll();
  const heroRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <ThemeToggle />
        <FloatingNav mobileOffset={isMobile} />

        {/* Hero Section */}
        <motion.section
          ref={heroRef}
          id="home"
          className={`relative min-h-[60vh] flex flex-col items-center justify-center overflow-hidden pt-24 ${isMobile ? 'pb-24' : ''}`}
        >
          <GridBackground />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center z-10 px-4"
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 relative leading-tight md:leading-[1.1] lg:leading-[1.08] px-2 md:px-8"
              style={{
                fontFamily: "Inter, sans-serif",
                wordBreak: "keep-all",
                whiteSpace: "pre-line",
              }}
            >
              Hey
              <span
                className="inline-block origin-[70%_70%] animate-wave"
                role="img"
                aria-label="waving hand"
              >
                👋
              </span>, I'm{" "}
              <span className="relative inline-block">
                <span className="text-primary">Grace Yuen</span>
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className={`flex flex-col sm:flex-row gap-4 items-center justify-center ${isMobile ? 'mb-12' : 'mb-2'}`}
            >
              
              <Button
                size="lg"
                className="hero-btn min-w-[160px] dark:bg-primary/95 dark:hover:bg-primary/100"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact Me
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hero-btn min-w-[160px] flex items-center justify-center group border-2 border-primary dark:border-primary/80 dark:bg-gray-900/95 dark:hover:bg-gray-800"
                onClick={async (e) => {
                  if (isMobile) {
                    // Animate the arrow rotation before scrolling
                    const arrow = document.getElementById("about-arrow");
                    if (arrow) {
                      arrow.classList.add("-rotate-45");
                      await new Promise((resolve) => setTimeout(resolve, 200));
                      arrow.classList.remove("-rotate-45");
                    }
                    document
                      .getElementById("about")
                      ?.scrollIntoView({ behavior: "smooth" });
                  } else {
                    document
                      .getElementById("about")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <span>About Me</span>
                <span className="ml-2 flex items-center">
                  <ArrowRight
                    id="about-arrow"
                    className="w-4 h-4 transition-transform duration-200 group-hover:-rotate-45"
                  />
                </span>
              </Button>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 px-4 py-2 rounded-full inline-flex items-center pointer-events-none">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                Available for new projects
              </div>
            </motion.div> */}
          </motion.div>

          {/* Animated Scroll Down Hint */}
          <AnimatePresence>
            {!showBackToTop && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute inset-x-0 mx-auto bottom-16 sm:bottom-8 md:bottom-12 flex flex-col items-center z-20 select-none w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg px-2"
                style={{ left: '0', right: '0', pointerEvents: 'auto', cursor: 'pointer' }}
                onClick={() => {
                  const aboutSection = document.getElementById('about');
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                tabIndex={0}
                aria-label="Scroll down to About section"
                role="button"
              >
                <span className="text-muted-foreground text-sm mb-2 animate-bounce bg-background/80 px-2 rounded">
                  Scroll down
                </span>
                <svg
                  className="w-6 h-6 text-muted-foreground animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
          {/* End Animated Scroll Down Hint */}
        </motion.section>

        {/* About Section */}
        <section id="about" className="py-20 px-6 md:px-8 max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="backdrop-blur-sm bg-background/95 border-border shadow-md dark:shadow-primary/10 dark:bg-gray-900/95 dark:border-gray-700">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Hello there!</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    I'm a passionate Year 2 Computer Science student at the
                    University of Hong Kong. I love turning complex problems
                    into simple, beautiful, and intuitive solutions.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    When I'm not coding, you can find me exploring new
                    technologies, contributing to open-source projects, or
                    making 3D models and games.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="backdrop-blur-sm bg-background/95 border-border shadow-md dark:shadow-primary/10 dark:bg-gray-900/95 dark:border-gray-700">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6">Skillsets</h3>
                  <div className="space-y-6">
                    {Object.entries(skillsets).map(
                      ([category, technologies]) => (
                        <div key={category}>
                          <div className="flex items-center gap-2 mb-3">
                            {category === "Programming" && (
                              <CodeXml className="w-4 h-4" />
                            )}
                            {category === "DevOps & Tools" && (
                              <Settings className="w-4 h-4" />
                            )}
                            {category === "Web Development" && (
                              <Globe className="w-4 h-4" />
                            )}
                            {category === "Cloud & Enterprise Solutions" && (
                              <Server className="w-4 h-4" />
                            )}
                            {category === "Design & Media" && (
                              <Palette className="w-4 h-4" />
                            )}
                            <h4 className="font-medium">{category}</h4>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="secondary"
                                className="text-xs"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className="py-20 px-6 md:px-8 max-w-6xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Experience
          </motion.h2>

          <Timeline experiences={experiences} />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6 md:px-8 max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {projects.map((project, index) => (
                <InfoCard
                  key={project.id}
                  title={project.title}
                  subtitle={project.subtitle}
                  shortDescription={project.shortDescription}
                  longDescription={project.longDescription}
                  skills={project.skills}
                  url={project.links as [string, string?, string?][]}
                  image={project.image}
                />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 md:px-8 max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Let's Get in Touch
          </motion.h2>
          <ContactCard />
        </section>

        {/* Back to Top Button */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{
                scale: 1.15,
                boxShadow: "0 6px 24px 0 rgba(0,0,0,0.18)",
              }}
              whileTap={{ scale: 0.92 }}
              onClick={scrollToTop}
              className={`fixed z-[60] p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110
                ${isMobile ? "bottom-24 right-4" : "bottom-20 right-8"}`}
              style={isMobile ? { marginBottom: "0", marginRight: "0" } : {}}
              aria-label="Back to Top"
            >
              <ChevronUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}
