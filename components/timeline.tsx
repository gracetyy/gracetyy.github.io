"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Briefcase, GraduationCap, Trophy, Code, X, Triangle } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { InfoCard } from "@/components/info-card"

interface Experience {
  type: "work" | "internship" | "project" | "hackathon"
  title: string
  company: string
  period: string
  shortDescription: string // short version
  longDescription?: string | string[] // long version, optional, can be string or string[]
  skills?: string[] // new: list of skills/tools used
  image?: string // optional image URL
  links?: [string, string?, string?][] // optional: array of [url, display text, Lucide icon name]
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
        {experiences.map((experience, index) => {
          // Map type to [type name, Lucide icon name, color class]
          let typeArr: [string, string?, string?] | undefined = undefined;
          switch (experience.type) {
            case "work":
              typeArr = ["Work", "Briefcase", "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"];
              break;
            case "internship":
              typeArr = ["Internship", "GraduationCap", "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"];
              break;
            case "project":
              typeArr = ["Project", "Code", "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100"];
              break;
            case "hackathon":
              typeArr = ["Hackathon", "Trophy", "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100"];
              break;
            default:
              typeArr = undefined;
          }
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center md:items-center ${index !== experiences.length - 1 ? 'mb-8 md:mb-[-96px]' : ''}`}
            >
              <div className="absolute top-1/2 -translate-y-1/2 left-8 md:left-1/2 md:transform md:-translate-x-1/2 z-10">
                {/* Mobile: right-pointed triangle, Desktop: circle */}
                <span className="block md:hidden">
                  {/* Triangle Lucide icon */}
                  {/* You can add the triangle here if needed */}
                </span>
                <span className="hidden md:block">
                  <span className="w-4 h-4 bg-primary rounded-full border-4 border-background block" />
                </span>
              </div>
              {/* Card container */}
              <div className={`w-full pl-16 md:pl-0 md:w-5/12 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8 md:ml-auto"}`}>
                <InfoCard
                  type={typeArr}
                  title={experience.title}
                  subtitle={experience.company}
                  period={experience.period}
                  shortDescription={experience.shortDescription}
                  longDescription={experience.longDescription}
                  skills={experience.skills}
                />
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
