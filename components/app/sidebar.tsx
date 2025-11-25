"use client"

import { cn } from "@/lib/utils"
import { LayoutDashboard, FileText, MessageSquare, Settings, ChevronLeft, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

type ActivePanel = "dashboard" | "documents" | "ask" | "status"

interface SidebarProps {
  activePanel: ActivePanel
  setActivePanel: (panel: ActivePanel) => void
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

const navItems = [
  { id: "dashboard" as const, label: "Dashboard", icon: LayoutDashboard },
  { id: "documents" as const, label: "Documents", icon: FileText },
  { id: "ask" as const, label: "Ask AI", icon: MessageSquare },
  { id: "status" as const, label: "System Status", icon: Settings },
]

export function Sidebar({ activePanel, setActivePanel, isOpen, setIsOpen }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-20 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={cn(
          "fixed left-0 top-0 z-30 flex h-full w-64 flex-col glass-strong border-r border-border/50 transition-transform lg:relative lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {/* Logo */}
        <div className="flex h-16 items-center justify-between border-b border-border/50 px-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent glow-sm">
                <FileText className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-accent animate-pulse" />
            </div>
            <span className="text-lg font-bold tracking-tight">AskMyDoc</span>
          </div>
          <Button variant="ghost" size="icon" className="lg:hidden hover:bg-accent/10" onClick={() => setIsOpen(false)}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 p-4">
          <div className="stagger-children">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActivePanel(item.id)
                  setIsOpen(false)
                }}
                className={cn(
                  "flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-all relative overflow-hidden group",
                  activePanel === item.id
                    ? "bg-gradient-to-r from-accent/20 to-primary/10 text-foreground"
                    : "text-muted-foreground hover:bg-accent/10 hover:text-foreground",
                )}
              >
                {activePanel === item.id && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-r-full bg-gradient-to-b from-primary to-accent" />
                )}
                <item.icon
                  className={cn(
                    "h-5 w-5 transition-transform group-hover:scale-110",
                    activePanel === item.id && "text-accent",
                  )}
                />
                {item.label}
                {item.id === "ask" && <Sparkles className="ml-auto h-3 w-3 text-accent animate-pulse" />}
              </button>
            ))}
          </div>
        </nav>

        <div className="border-t border-border/50 p-4">
          <div className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-accent/10 to-primary/5 p-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
              <span className="text-sm font-bold text-primary-foreground">U</span>
            </div>
            <div className="flex-1 truncate">
              <p className="text-sm font-medium">User</p>
              <p className="truncate text-xs text-muted-foreground">user@example.com</p>
            </div>
            <div className="status-dot" />
          </div>
        </div>
      </aside>
    </>
  )
}
