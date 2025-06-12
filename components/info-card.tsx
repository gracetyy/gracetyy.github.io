"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import * as LucideIcons from "lucide-react"

// Rename component and props
export interface InfoCardProps {
  type?: [string, string?, string?] // [type name, Lucide icon name, color class]
  title: string
  subtitle: string
  period?: string
  shortDescription: string
  longDescription?: string | string[]
  skills?: string[]
  image?: string
  url?: [string, string?, string?][] // [url, display text, Lucide icon name]
}

export function InfoCard(props: InfoCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const {
    type,
    title,
    subtitle,
    period,
    shortDescription,
    longDescription,
    skills,
    image,
    url,
  } = props

  // Dynamically get Lucide icon component by name
  const getLucideIcon = (iconName?: string, className = "w-4 h-4") => {
    if (!iconName || !(iconName in LucideIcons)) return <LucideIcons.ExternalLink className={className} />
    const Icon = (LucideIcons as any)[iconName]
    return <Icon className={className} />
  }

  // Render longDescription as bullet points if array
  const renderLongDescription = () => {
    if (!longDescription) return <p className="text-foreground leading-relaxed text-xs md:text-sm break-words">{shortDescription}</p>
    if (Array.isArray(longDescription)) {
      return (
        <ul className="list-disc pl-5 space-y-1 text-foreground text-xs md:text-sm">
          {longDescription.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )
    }
    return <p className="text-foreground leading-relaxed text-xs md:text-sm break-words">{longDescription}</p>
  }

  // Type badge color
  const typeColor = type && type[2] ? type[2] : "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100"

  const showTypeBadge = type && type[0]

  return (
    <>
      <Card
        className="backdrop-blur-sm bg-background/95 border-border shadow-md hover:shadow-lg dark:shadow-primary/10 dark:bg-gray-900/95 dark:border-gray-700 transition-all duration-300 cursor-pointer"
        onClick={() => setIsExpanded(true)}
      >
        <CardContent className="p-4 md:p-6">
          {/* Image (optional) */}
          {image && (
            <img src={image} alt={title} className="w-full h-40 object-cover rounded mb-3" />
          )}

          {showTypeBadge && (
            <div className={`flex items-center gap-2 mb-3`}>
              <div className={`px-2 py-1 rounded-full text-xs flex items-center gap-1 pointer-events-none ${typeColor} whitespace-nowrap`}>
                {getLucideIcon(type[1])}
                <span className="capitalize">{type[0]}</span>
              </div>
            </div>
          )}

          <h3 className="text-base md:text-lg font-bold text-foreground mb-2 break-words">{title}</h3>
          <h4 className="text-sm md:text-base text-muted-foreground mb-2 break-words">{subtitle}</h4>

          {period && (
            <div className="flex items-center gap-1 text-xs md:text-sm text-muted-foreground mb-2">
              <LucideIcons.Calendar className="w-3 h-3 flex-shrink-0" />
              <span className="break-words">{period}</span>
            </div>
          )}

          {/* Skills badges (if any) */}
          {skills && skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
              ))}
            </div>
          )}

          {/* Link buttons (if any) - always show */}
          {url && url.length > 0 && (
            <div className={`flex flex-col gap-2 mb-2 ${url.length > 1 ? 'sm:grid sm:grid-cols-2' : ''}`}>
              {url.map(([linkUrl, displayText, icon], i) => (
                <Button
                  key={linkUrl + i}
                  size="sm"
                  variant="outline"
                  onClick={e => { e.stopPropagation(); window.open(linkUrl, "_blank") }}
                  className="w-full flex items-center gap-1 justify-start"
                >
                  {getLucideIcon(icon, "w-4 h-4 mr-1")}
                  {displayText || linkUrl}
                </Button>
              ))}
            </div>
          )}

          {/* Only show shortDescription in the card if not expanded */}
          {!isExpanded && (
            <p className="text-foreground leading-relaxed text-xs md:text-sm break-words">{shortDescription}</p>
          )}
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
                  {/* Inline type badge for experience only */}
                  {showTypeBadge && (
                    <span className={`px-3 py-1 rounded-full text-sm flex items-center gap-2 ${typeColor}`}>
                      {getLucideIcon(type[1])}
                      <span className="capitalize">{type[0]}</span>
                    </span>
                  )}
                  <Button variant="outline" size="icon" onClick={() => setIsExpanded(false)}>
                    <LucideIcons.X className="w-4 h-4" />
                  </Button>
                </div>

                {image && (
                  <img src={image} alt={title} className="w-full h-56 object-cover rounded mb-4" />
                )}

                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                <h3 className="text-xl text-muted-foreground mb-4">{subtitle}</h3>

                {period && (
                  <div className="flex items-center gap-1 text-xs md:text-sm text-muted-foreground mb-4">
                    <LucideIcons.Calendar className="w-3 h-3 flex-shrink-0" />
                    <span className="break-words">{period}</span>
                  </div>
                )}

                {/* Skills badges (if any) */}
                {skills && skills.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {skills.map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                )}

                {/* URLs (if any) */}
                {url && url.length > 0 && (
                  <div className="flex flex-col gap-2 mb-4">
                    {url.map(([linkUrl, displayText, icon], i) => (
                      <Button
                        key={linkUrl + i}
                        size="sm"
                        variant="outline"
                        onClick={() => window.open(linkUrl, "_blank")}
                        className="w-full flex items-center gap-1 justify-start"
                      >
                        {getLucideIcon(icon, "w-4 h-4 mr-1")}
                        {displayText || linkUrl}
                      </Button>
                    ))}
                  </div>
                )}

                {/* Show longDescription in expanded modal */}
                {renderLongDescription()}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
