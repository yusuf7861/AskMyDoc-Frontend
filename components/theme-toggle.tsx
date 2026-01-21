"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isLight = resolvedTheme === "light"

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => setTheme(isLight ? "dark" : "light")}
      className="hover:bg-accent/10"
    >
      <Sun className={`h-4 w-4 transition-opacity ${isLight ? "opacity-100" : "opacity-0"}`} />
      <Moon className={`h-4 w-4 transition-opacity absolute ${isLight ? "opacity-0" : "opacity-100"}`} />
    </Button>
  )
}
