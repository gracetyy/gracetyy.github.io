"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function HeroGrid() {
  const [filledCells, setFilledCells] = useState<Set<string>>(new Set())
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const gridRef = useRef<HTMLDivElement>(null)

  const gridSize = 20
  const cols = Math.ceil(window?.innerWidth / gridSize) || 60
  const rows = Math.ceil(window?.innerHeight / gridSize) || 40

  useEffect(() => {
    // Fill some random cells initially
    const initialCells = new Set<string>()
    for (let i = 0; i < 50; i++) {
      const row = Math.floor(Math.random() * rows)
      const col = Math.floor(Math.random() * cols)
      initialCells.add(`${row}-${col}`)
    }
    setFilledCells(initialCells)
  }, [rows, cols])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!gridRef.current) return

    const rect = gridRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setMousePosition({ x, y })

    // Fill cells near cursor
    const centerCol = Math.floor(x / gridSize)
    const centerRow = Math.floor(y / gridSize)
    const radius = 3

    const newFilledCells = new Set(filledCells)

    for (let row = centerRow - radius; row <= centerRow + radius; row++) {
      for (let col = centerCol - radius; col <= centerCol + radius; col++) {
        if (row >= 0 && row < rows && col >= 0 && col < cols) {
          const distance = Math.sqrt((row - centerRow) ** 2 + (col - centerCol) ** 2)
          if (distance <= radius && Math.random() > 0.7) {
            newFilledCells.add(`${row}-${col}`)
          }
        }
      }
    }

    setFilledCells(newFilledCells)
  }

  return (
    <>
      <div
        ref={gridRef}
        className="absolute inset-0 bg-[#fafafa] dark:bg-background hero-grid-bg"
        onMouseMove={handleMouseMove}
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
        }}
      >
        {Array.from({ length: rows }).map((_, row) =>
          Array.from({ length: cols }).map((_, col) => {
            const cellKey = `${row}-${col}`
            const isFilled = filledCells.has(cellKey)

            return (
              <motion.div
                key={cellKey}
                className="absolute bg-primary/20"
                style={{
                  left: col * gridSize,
                  top: row * gridSize,
                  width: gridSize - 1,
                  height: gridSize - 1,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: isFilled ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            )
          }),
        )}
      </div>
      <style jsx global>{`
        @media (prefers-color-scheme: dark) {
          .dark .hero-grid-bg {
            background-image:
              linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px);
          }
        }
      `}</style>
    </>
  )
}