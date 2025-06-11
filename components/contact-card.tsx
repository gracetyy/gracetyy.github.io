"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/app/content";
import { Mail, Github, Linkedin } from "lucide-react";
import type { ReactElement } from "react";

const iconMap: Record<string, ReactElement> = {
  mail: <Mail className="w-5 h-5" />,
  github: <Github className="w-5 h-5" />,
  linkedin: <Linkedin className="w-5 h-5" />,
};

export function ContactCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto"
    >
      <Card className="backdrop-blur-sm bg-background/95 border-border shadow-md dark:shadow-primary/10 dark:bg-gray-900/95 dark:border-gray-700 overflow-hidden relative">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        />

        <CardContent className="p-12 relative">
          {/* <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Contact Info
            </motion.h2>

            <motion.p
              className="text-muted-foreground text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I'm always open to discussing new opportunities and interesting
              projects.
            </motion.p>
          </div> */}

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <Button
                  variant="outline"
                  className="w-full justify-start p-6 h-auto hover:bg-accent/80 dark:hover:bg-gray-800/80 transition-all duration-300 group"
                  onClick={() =>
                    contact.href !== "#" && window.open(contact.href, "_blank")
                  }
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      {iconMap[contact.icon as keyof typeof iconMap]}
                    </div>
                    <div className="text-left">
                      <div className="font-medium">{contact.label}</div>
                      <div className="text-sm text-muted-foreground">
                        {contact.value}
                      </div>
                    </div>
                  </div>
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Circular Text */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="relative w-32 h-32">
              <svg
                className="w-full h-full animate-spin-slow"
                viewBox="0 0 100 100"
              >
                <defs>
                  <path
                    id="circle"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text className="text-xs fill-current">
                  <textPath
                    href="#circle"
                    className="tracking-widest"
                    textLength="230"
                    lengthAdjust="spacingAndGlyphs"
                  >
                    GRACE YUEN • YUEN TIN YAN •
                  </textPath>
                </text>
              </svg>
              {/* <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
              </div> */}
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
