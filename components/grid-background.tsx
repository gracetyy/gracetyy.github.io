"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function GridBackground() {
  const [isDark, setIsDark] = useState(false)
  const [dotPositions, setDotPositions] = useState<Array<{ left: number; top: number; duration: number; delay: number }>>([])

  useEffect(() => {
    // Detect dark mode using matchMedia
    const match = window.matchMedia('(prefers-color-scheme: dark)')
    const update = () => setIsDark(document.documentElement.classList.contains('dark') || match.matches)
    update()
    match.addEventListener('change', update)
    // Also listen for class changes (theme toggle)
    const observer = new MutationObserver(update)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    // Generate random dot positions only on client
    setDotPositions(
      Array.from({ length: 20 }).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 2,
      }))
    )
    return () => {
      match.removeEventListener('change', update)
      observer.disconnect()
    }
  }, [])

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Grid pattern background */}
      <div
        className={`absolute inset-0 opacity-30 grid-bg block dark:hidden`}
        style={{
          backgroundImage:
            `linear-gradient(rgba(0,0,0,0.07) 1px, transparent 1px),\nlinear-gradient(90deg, rgba(0,0,0,0.07) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      <div
        className={`absolute inset-0 opacity-40 grid-bg hidden dark:block`}
        style={{
          backgroundImage:
            `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),\nlinear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Gradient overlay to fade the pattern towards bottom */}
      <div
        className="absolute inset-0 block dark:hidden"
        style={{
          background: `linear-gradient(
            to bottom,
            rgba(255,255,255,0) 0%,
            rgba(255,255,255,0.3) 60%,
            rgba(255,255,255,0.8) 85%,
            rgba(255,255,255,1) 100%
          )`,
        }}
      />
      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          background: `linear-gradient(
            to bottom,
            rgba(107, 123, 172, 0.5) 0%,
            rgba(10, 23, 97, 0.3) 60%,
            rgba(2, 8, 23, 0.85) 100%
          )`,
        }}
      />

      {/* Subtle animated dots - only render on client after mount */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {dotPositions.map((dot, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              left: `${dot.left}%`,
              top: `${dot.top}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: dot.duration,
              repeat: Number.POSITIVE_INFINITY,
              delay: dot.delay,
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}
