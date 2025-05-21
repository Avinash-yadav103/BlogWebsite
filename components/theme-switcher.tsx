"use client"

import { useState } from "react"
import { useTheme } from "next-themes"
import { Monitor, Moon, Newspaper, Sun } from "lucide-react"

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg"
        aria-label="Toggle theme switcher"
      >
        {theme === "light" && <Sun className="h-5 w-5" />}
        {theme === "dark" && <Moon className="h-5 w-5" />}
        {theme === "newspaper" && <Newspaper className="h-5 w-5" />}
        {theme === "system" && <Monitor className="h-5 w-5" />}
      </button>

      {isOpen && (
        <div className="absolute bottom-12 right-0 flex flex-col gap-2 rounded-lg border bg-background p-2 shadow-lg">
          <button
            onClick={() => {
              setTheme("light")
              setIsOpen(false)
            }}
            className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm ${
              theme === "light" ? "bg-muted" : "hover:bg-muted"
            }`}
          >
            <Sun className="h-4 w-4" />
            Light
          </button>
          <button
            onClick={() => {
              setTheme("dark")
              setIsOpen(false)
            }}
            className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm ${
              theme === "dark" ? "bg-muted" : "hover:bg-muted"
            }`}
          >
            <Moon className="h-4 w-4" />
            Dark
          </button>
          <button
            onClick={() => {
              setTheme("newspaper")
              setIsOpen(false)
            }}
            className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm ${
              theme === "newspaper" ? "bg-muted" : "hover:bg-muted"
            }`}
          >
            <Newspaper className="h-4 w-4" />
            Newspaper
          </button>
        </div>
      )}
    </div>
  )
}
