"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useIsMobile } from "@/components/ui/use-mobile"

const navItems = [
	{ name: "Home", href: "#home" },
	{ name: "About", href: "#about" },
	{ name: "Experience", href: "#experience" },
	{ name: "Projects", href: "#projects" },
	{ name: "Contact", href: "#contact" },
]

export function FloatingNav({ mobileOffset = false }: { mobileOffset?: boolean } = {}) {
	const isMobile = useIsMobile();
	const [isAtBottom, setIsAtBottom] = useState(false)
	const [activeSection, setActiveSection] = useState("home")
	const [isFloating, setIsFloating] = useState(true)
	const navRef = useRef(null)

	useEffect(() => {
		const handleScroll = () => {
			const scrollHeight = document.documentElement.scrollHeight
			const scrollTop = document.documentElement.scrollTop
			const clientHeight = document.documentElement.clientHeight

			const bottomThreshold = 100
			const isBottom = scrollTop + clientHeight >= scrollHeight - bottomThreshold
			setIsAtBottom(isBottom)
			setIsFloating(!isBottom)

			// Update active section based on scroll position
			const sections = navItems.map((item) => item.href.slice(1))
			const currentSection = sections.find((section) => {
				const element = document.getElementById(section)
				if (element) {
					const rect = element.getBoundingClientRect()
					return rect.top <= 100 && rect.bottom >= 100
				}
				return false
			})

			if (currentSection) {
				setActiveSection(currentSection)
			}
		}

		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	const scrollToSection = (href: string) => {
		const element = document.getElementById(href.slice(1))
		if (element) {
			element.scrollIntoView({ behavior: "smooth" })
		}
	}

	return (
		<motion.nav
			ref={navRef}
			className={`fixed z-40 left-1/2 -translate-x-1/2 transition-all duration-500 pointer-events-auto
				${isAtBottom ? `bottom-0 w-full max-w-6xl` : `${mobileOffset ? 'bottom-4' : 'bottom-4'} w-auto`}
				${mobileOffset ? ' md:bottom-8 md:mb-0' : ''}
			`}
		>
			<motion.div
				layout
				className={`backdrop-blur-md bg-background/95 border border-border shadow-lg dark:bg-gray-900/95 dark:border-gray-700 transition-all duration-300 ${
					isAtBottom
						? "rounded-tl-2xl rounded-tr-2xl rounded-b-none w-full h-full"
						: "rounded-full w-auto h-full"
				}`}
			>
				<div className="flex items-center justify-center h-full px-4 md:px-6">
					<div className="flex items-center space-x-1">
						<span className="text-sm font-semibold mr-2 md:mr-4 hidden sm:block">Grace Yuen</span>
						<div className="h-4 w-px bg-border mr-2 md:mr-4 hidden sm:block" />

						{navItems.map((item) => (
							<motion.div key={item.name}>
								<Button
									variant="ghost"
									size="sm"
									onClick={() => scrollToSection(item.href)}
									className={`relative transition-all duration-300 touch-manipulation text-xs md:text-sm px-2 md:px-3 ${
										activeSection === item.href.slice(1)
											? "text-primary"
											: "text-muted-foreground"
									}${
									!isMobile ? " hover:bg-accent/80 hover:text-foreground active:bg-accent/80" : ""
									}`}
									tabIndex={0}
									// Remove hover/active styles on touch devices
									onTouchStart={e => {
										e.currentTarget.classList.remove("hover:bg-accent", "active:bg-accent/80")
									}}
								>
									<motion.span whileHover={!isMobile ? { scale: 1.05 } : {}} whileTap={{ scale: 0.95 }}>
										{item.name}
									</motion.span>

									{activeSection === item.href.slice(1) && (
										isFloating ? (
											<motion.div
												className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
												initial={false}
												transition={{ ease: "easeInOut", duration: 0.35 }}
												style={{ y: 0, x: 0 }}
												layoutId={item.name}
											/>
										) : (
											<div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
										)
									)}
								</Button>
							</motion.div>
						))}
					</div>
				</div>
			</motion.div>
		</motion.nav>
	)
}
