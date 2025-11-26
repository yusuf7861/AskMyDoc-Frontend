"use client"

import { Menu, Bell, Search, Command, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTheme } from "next-themes"

interface TopbarProps {
  onMenuToggle: () => void
  isLoggedIn?: boolean
  user?: {
    name: string
    avatar?: string
  }
}

export function Topbar({ onMenuToggle, isLoggedIn = false, user }: TopbarProps) {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header className="flex h-16 items-center justify-between border-b border-border/50 glass-strong px-4 lg:px-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="lg:hidden hover:bg-accent/10" onClick={onMenuToggle}>
          <Menu className="h-5 w-5" />
        </Button>

        <div className="relative hidden md:block group">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground group-focus-within:text-accent transition-colors" />
          <Input
            placeholder="Search documents..."
            className="w-72 pl-9 pr-20 bg-muted/50 border-border/50 focus:border-accent/50 focus:bg-background transition-all"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1 text-xs text-muted-foreground">
            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px]">
              <Command className="h-2.5 w-2.5 inline" />
            </kbd>
            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px]">K</kbd>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="hover:bg-accent/10 relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-accent animate-pulse" />
        </Button>
        <Button variant="ghost" size="icon" className="hover:bg-accent/10" onClick={toggleTheme}>
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
        {isLoggedIn && user && (
          <div className="ml-2 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent cursor-pointer hover:opacity-90 transition-opacity">
            <span className="text-xs font-bold text-primary-foreground">
              {user.name.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
      </div>
    </header>
  )
}
