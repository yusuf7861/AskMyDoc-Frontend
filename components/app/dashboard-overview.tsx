"use client"

import { FileText, MessageSquare, Search, TrendingUp, Clock, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function DashboardOverview() {
  const stats = [
    {
      label: "Total Documents",
      value: "0",
      change: "+0 this week",
      icon: FileText,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      label: "Questions Asked",
      value: "0",
      change: "+0 today",
      icon: MessageSquare,
      gradient: "from-primary to-accent",
    },
    {
      label: "Searches",
      value: "0",
      change: "0% accuracy",
      icon: Search,
      gradient: "from-accent to-pink-500",
    },
    {
      label: "Avg Response Time",
      value: "0s",
      change: "Real-time",
      icon: Zap,
      gradient: "from-amber-500 to-orange-500",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="rounded-2xl glass-strong p-6 border border-border/50 card-shine">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Welcome back!</h1>
            <p className="text-muted-foreground mt-1">Here's what's happening with your document library today.</p>
          </div>
          <div className="hidden md:flex items-center gap-2 rounded-full glass px-4 py-2 text-sm">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Last sync: Just now</span>
            <div className="status-dot" />
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 stagger-children">
        {stats.map((stat, index) => (
          <Card key={stat.label} className="group hover-lift border-border/50 glass-strong overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <TrendingUp className="h-3 w-3 text-accent" />
                    {stat.change}
                  </p>
                </div>
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${stat.gradient} shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <stat.icon className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { icon: FileText, label: "Upload Document", description: "Add new documents to your library" },
          { icon: MessageSquare, label: "Ask a Question", description: "Query your document knowledge base" },
          { icon: Search, label: "Search Documents", description: "Find specific information instantly" },
        ].map((action) => (
          <div
            key={action.label}
            className="group cursor-pointer rounded-xl glass-strong p-4 border border-border/50 hover-lift transition-all hover:border-accent/50"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                <action.icon className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="font-medium group-hover:text-accent transition-colors">{action.label}</p>
                <p className="text-xs text-muted-foreground">{action.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
