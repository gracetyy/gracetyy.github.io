"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, X, Video, PenTool, FileText } from "lucide-react"
import Image from "next/image"

interface Project {
  id: number
  title: string
  description: string
  image?: string
  technologies?: string[]
  liveUrl?: string
  githubUrl?: string
  details: string
  videoUrl?: string
  prototypeUrl?: string
  pitchDeckUrl?: string
}

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: -5 }}
        className="cursor-pointer"
        onClick={() => setIsExpanded(true)}
      >
        <Card className="backdrop-blur-sm bg-background/95 border-border shadow-md hover:shadow-xl dark:shadow-primary/10 dark:bg-gray-900/95 dark:border-gray-700 transition-all duration-300 overflow-hidden group flex flex-col h-full">
          {/* Only render the image container if there is an image */}
          {project.image && project.image !== "" && (
            <div className="relative overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            </div>
          )}
          {/* CardContent always rendered, no extra gap if no image */}
          <CardContent className="p-6 flex flex-col flex-1">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies && project.technologies.length > 0 && project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex gap-2">
              {project.liveUrl && project.liveUrl !== "" && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={(e) => {
                    e.stopPropagation()
                    window.open(project.liveUrl, "_blank")
                  }}
                  className="flex-1"
                >
                  <ExternalLink className="w-3 h-3 mr-1" />
                  Live Demo
                </Button>
              )}
              {project.githubUrl && project.githubUrl !== "" && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={(e) => {
                    e.stopPropagation()
                    window.open(project.githubUrl, "_blank")
                  }}
                  className="flex-1"
                >
                  <Github className="w-3 h-3 mr-1" />
                  Code
                </Button>
              )}
              {project.videoUrl && project.videoUrl !== "" && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={(e) => {
                    e.stopPropagation()
                    window.open(project.videoUrl, "_blank")
                  }}
                  className="flex-1"
                >
                  <Video className="w-3 h-3 mr-1" />
                  Video
                </Button>
              )}
              {project.prototypeUrl && project.prototypeUrl !== "" && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={(e) => {
                    e.stopPropagation()
                    window.open(project.prototypeUrl, "_blank")
                  }}
                  className="flex-1"
                >
                  <PenTool className="w-3 h-3 mr-1" />
                  Prototype
                </Button>
              )}
              {project.pitchDeckUrl && project.pitchDeckUrl !== "" && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={(e) => {
                    e.stopPropagation()
                    window.open(project.pitchDeckUrl, "_blank")
                  }}
                  className="flex-1"
                >
                  <FileText className="w-3 h-3 mr-1" />
                  Pitch Deck
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>

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
              <div className="relative">
                {project.image && project.image !== "" ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                ) : null}
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm"
                  onClick={() => setIsExpanded(false)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{project.title}</h2>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies && project.technologies.length > 0 && project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">{project.details}</p>

                <div className="flex gap-4">
                  {project.liveUrl && project.liveUrl !== "" && (
                    <Button onClick={() => window.open(project.liveUrl, "_blank")} className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live Demo
                    </Button>
                  )}
                  {project.githubUrl && project.githubUrl !== "" && (
                    <Button variant="outline" onClick={() => window.open(project.githubUrl, "_blank")} className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  )}
                  {project.videoUrl && project.videoUrl !== "" && (
                    <Button variant="outline" onClick={() => window.open(project.videoUrl, "_blank")} className="flex-1">
                      <Video className="w-4 h-4 mr-2" />
                      Video
                    </Button>
                  )}
                  {project.prototypeUrl && project.prototypeUrl !== "" && (
                    <Button variant="outline" onClick={() => window.open(project.prototypeUrl, "_blank")} className="flex-1">
                      <PenTool className="w-4 h-4 mr-2" />
                      Prototype
                    </Button>
                  )}
                  {project.pitchDeckUrl && project.pitchDeckUrl !== "" && (
                    <Button variant="outline" onClick={() => window.open(project.pitchDeckUrl, "_blank")} className="flex-1">
                      <FileText className="w-4 h-4 mr-2" />
                      Pitch Deck
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
