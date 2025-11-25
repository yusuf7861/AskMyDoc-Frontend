"use client"

import { Settings, RefreshCw, CheckCircle2, XCircle, Activity, Server, Database, Cpu } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function SystemStatusPanel() {
  return (
    <div className="max-w-4xl space-y-6">
      <Card className="glass-strong border-border/50 overflow-hidden">
        <CardHeader className="border-b border-border/50 bg-gradient-to-r from-accent/5 to-primary/5">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                  <Activity className="h-4 w-4 text-primary-foreground" />
                </div>
                System Overview
              </CardTitle>
              <CardDescription>Real-time system metrics and performance</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="status-dot" />
              <span className="text-sm text-muted-foreground">All systems operational</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid gap-4 sm:grid-cols-3 mb-6">
            {[
              { label: "CPU Usage", value: "12%", icon: Cpu, status: "healthy" },
              { label: "Memory", value: "2.4 GB", icon: Server, status: "healthy" },
              { label: "Storage", value: "45%", icon: Database, status: "healthy" },
            ].map((metric) => (
              <div key={metric.label} className="rounded-xl border border-border/50 bg-muted/30 p-4 hover-lift">
                <div className="flex items-center justify-between mb-2">
                  <metric.icon className="h-4 w-4 text-muted-foreground" />
                  <div className="status-dot" />
                </div>
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className="text-xs text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Status Panel */}
      <Card className="glass-strong border-border/50 hover-lift overflow-hidden">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-primary">
                  <Settings className="h-4 w-4 text-primary-foreground" />
                </div>
                Service Health
              </CardTitle>
              <CardDescription>Check the health of system components</CardDescription>
            </div>
            <Button
              id="stats-refresh"
              variant="outline"
              size="icon"
              className="hover:bg-accent/10 group bg-transparent"
            >
              <RefreshCw className="h-4 w-4 group-hover:rotate-180 transition-transform duration-500" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Stats Display */}
          <div id="stats" className="rounded-xl border border-border/50 bg-muted/30 p-4">
            <p className="text-sm text-muted-foreground">System statistics will load here...</p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium flex items-center gap-2">
              <Activity className="h-4 w-4 text-accent" />
              API Health Checks
            </h4>

            <div className="grid gap-4 sm:grid-cols-2">
              {/* Gemini Status */}
              <div className="flex items-center justify-between rounded-xl border border-border/50 p-4 hover-lift glass-strong">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                    <CheckCircle2 className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="font-medium">Gemini API</p>
                    <p id="gemini-status" className="text-xs text-muted-foreground">
                      Not checked
                    </p>
                  </div>
                </div>
                <Button
                  id="gemini-check"
                  variant="outline"
                  size="sm"
                  className="hover:bg-accent/10 hover:border-accent/50 bg-transparent"
                >
                  Test
                </Button>
              </div>

              {/* Embeddings Status */}
              <div className="flex items-center justify-between rounded-xl border border-border/50 p-4 hover-lift glass-strong">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-primary/20">
                    <XCircle className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Embeddings</p>
                    <p className="text-xs text-muted-foreground">Not checked</p>
                  </div>
                </div>
                <Button
                  id="embed-check"
                  variant="outline"
                  size="sm"
                  className="hover:bg-accent/10 hover:border-accent/50 bg-transparent"
                >
                  Test
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
