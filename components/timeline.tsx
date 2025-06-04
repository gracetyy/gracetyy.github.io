"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Briefcase, GraduationCap, Trophy, Code, X, Triangle } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Experience {
  type: "work" | "internship" | "project" | "hackathon"
  title: string
  company: string
  period: string
  description: string // short version
  longDescription?: string | string[] // long version, optional, can be string or string[]
  skills?: string[] // new: list of skills/tools used
}

interface TimelineProps {
  experiences: Experience[]
}

const getIcon = (type: string) => {
  switch (type) {
    case "work":
      return <Briefcase className="w-4 h-4" />
    case "internship":
      return <GraduationCap className="w-4 h-4" />
    case "project":
      return <Code className="w-4 h-4" />
    case "hackathon":
      return <Trophy className="w-4 h-4" />
    default:
      return <Briefcase className="w-4 h-4" />
  }
}

const getTypeColor = (type: string) => {
  switch (type) {
    case "work":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
    case "internship":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
    case "project":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100"
    case "hackathon":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100"
  }
}

export function Timeline({ experiences }: TimelineProps) {
  return (
    <div className="relative max-w-4xl mx-auto px-4">
      {/* Vertical line - positioned differently on mobile vs desktop */}
      <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-0.5 h-full bg-border" />

      {/* Custom alternating layout for desktop: overlap cards vertically */}
      <div className="flex flex-col">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative flex items-center md:items-center ${index !== experiences.length - 1 ? 'mb-8 md:mb-[-96px]' : ''}`}
          >
            <div
              className="absolute top-1/2 -translate-y-1/2 left-8 md:left-1/2 md:transform md:-translate-x-1/2 z-10"
            >
              {/* Mobile: right-pointed triangle, Desktop: circle */}
              <span className="block md:hidden">
                <Triangle className="w-4 h-4 text-border fill-current rotate-90" fill="currentColor" />
              </span>
              <span className="hidden md:block">
                <span className="w-4 h-4 bg-primary rounded-full border-4 border-background block" />
              </span>
            </div>

            {/* Card container */}
            <div className={`w-full pl-16 md:pl-0 md:w-5/12 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8 md:ml-auto"}`}>
              <ExperienceCard experience={experience} index={index} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function ExperienceCard({ experience, index }: { experience: Experience; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false)

  // Helper to render longDescription as bullet points if it's an array
  const renderLongDescription = () => {
    if (!experience.longDescription) return <p className="text-foreground leading-relaxed text-xs md:text-sm break-words">{experience.description}</p>
    if (Array.isArray(experience.longDescription)) {
      return (
        <ul className="list-disc pl-5 space-y-1 text-foreground text-xs md:text-sm">
          {experience.longDescription.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )
    }
    return <p className="text-foreground leading-relaxed text-xs md:text-sm break-words">{experience.longDescription}</p>
  }

  return (
    <>
      <Card
        className="backdrop-blur-sm bg-background/95 border-border shadow-md hover:shadow-lg dark:shadow-primary/10 dark:bg-gray-900/95 dark:border-gray-700 transition-all duration-300 cursor-pointer"
        onClick={() => setIsExpanded(true)}
      >
        <CardContent className="p-4 md:p-6">
          <div className="flex items-center gap-2 mb-3">
            <div
              className={`px-2 py-1 rounded-full text-xs flex items-center gap-1 pointer-events-none ${getTypeColor(experience.type)} whitespace-nowrap`}
            >
              {getIcon(experience.type)}
              <span className="capitalize">{experience.type}</span>
            </div>
          </div>

          <h3 className="text-base md:text-lg font-bold text-foreground mb-2 break-words">{experience.title}</h3>
          <h4 className="text-sm md:text-base text-muted-foreground mb-3 break-words">{experience.company}</h4>

          <div className="flex flex-col gap-1 text-xs md:text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3 flex-shrink-0" />
              <span className="break-words">{experience.period}</span>
            </div>
          </div>

          {/* Skills badges (if any) */}
          {experience.skills && experience.skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-2">
              {experience.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
              ))}
            </div>
          )}

          <p className="text-foreground leading-relaxed text-xs md:text-sm break-words">{experience.description}</p>
        </CardContent>
      </Card>

      {/* Expanded Modal */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsExpanded(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-background dark:bg-gray-900 border border-border dark:border-gray-700 shadow-lg dark:shadow-primary/10 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`px-3 py-1 rounded-full text-sm flex items-center gap-2 ${getTypeColor(experience.type)}`}
                  >
                    {getIcon(experience.type)}
                    <span className="capitalize">{experience.type}</span>
                  </div>
                  <Button variant="outline" size="icon" onClick={() => setIsExpanded(false)}>
                    <X className="w-4 h-4" />
                  </Button>
                </div>

                <h2 className="text-2xl font-bold mb-2">{experience.title}</h2>
                <h3 className="text-xl text-muted-foreground mb-4">{experience.company}</h3>

                <div className="flex flex-col gap-1 text-xs md:text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 flex-shrink-0" />
                    <span className="break-words">{experience.period}</span>
                  </div>
                </div>

                {/* Skills badges (if any) */}
                {experience.skills && experience.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {experience.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                )}

                {renderLongDescription()}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
