"use client"

import { useState, useEffect } from "react"
import { Settings, RefreshCw, CheckCircle2, XCircle, Activity, Server, Database, Cpu, Loader2, FileText, Layers } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getStats, testGemini, testEmbedding } from "@/lib/api"
import { StatsResponse } from "@/lib/types"

export function SystemStatusPanel() {
  const [stats, setStats] = useState<StatsResponse | null>(null)
  const [isLoadingStats, setIsLoadingStats] = useState(false)
  const [geminiStatus, setGeminiStatus] = useState<{ status: "idle" | "loading" | "success" | "error"; message: string }>({
    status: "idle",
    message: "Not checked"
  })
  const [embedStatus, setEmbedStatus] = useState<{ status: "idle" | "loading" | "success" | "error"; message: string }>({
    status: "idle",
    message: "Not checked"
  })

  const fetchStats = async () => {
    setIsLoadingStats(true)
    try {
      const data = await getStats()
      setStats(data)
    } catch (error) {
      console.error("Failed to fetch stats:", error)
    } finally {
      setIsLoadingStats(false)
    }
  }

  useEffect(() => {
    fetchStats()
  }, [])

  const handleTestGemini = async () => {
    setGeminiStatus({ status: "loading", message: "Testing..." })
    try {
      const result = await testGemini()
      setGeminiStatus({ status: "success", message: result })
    } catch (error) {
      setGeminiStatus({ 
        status: "error", 
        message: error instanceof Error ? error.message : "Connection failed" 
      })
    }
  }

  const handleTestEmbed = async () => {
    setEmbedStatus({ status: "loading", message: "Testing..." })
    try {
      const result = await testEmbedding()
      setEmbedStatus({ status: "success", message: result })
    } catch (error) {
      setEmbedStatus({ 
        status: "error", 
        message: error instanceof Error ? error.message : "Connection failed" 
      })
    }
  }

  const getStatusIcon = (status: "idle" | "loading" | "success" | "error") => {
    switch (status) {
      case "loading":
        return <Loader2 className="h-6 w-6 text-accent animate-spin" />
      case "success":
        return <CheckCircle2 className="h-6 w-6 text-green-500" />
      case "error":
        return <XCircle className="h-6 w-6 text-destructive" />
      default:
        return <XCircle className="h-6 w-6 text-muted-foreground" />
    }
  }

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
              <div className={`status-dot ${stats ? "" : "warning"}`} />
              <span className="text-sm text-muted-foreground">
                {stats ? "All systems operational" : "Loading..."}
              </span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid gap-4 sm:grid-cols-2 mb-6">
            <div className="rounded-xl border border-border/50 bg-muted/30 p-4 hover-lift">
              <div className="flex items-center justify-between mb-2">
                <FileText className="h-4 w-4 text-muted-foreground" />
                <div className={`status-dot ${stats ? "" : "warning"}`} />
              </div>
              <div className="text-2xl font-bold">{stats?.documents ?? "—"}</div>
              <div className="text-xs text-muted-foreground">Documents</div>
            </div>
            <div className="rounded-xl border border-border/50 bg-muted/30 p-4 hover-lift">
              <div className="flex items-center justify-between mb-2">
                <Layers className="h-4 w-4 text-muted-foreground" />
                <div className={`status-dot ${stats ? "" : "warning"}`} />
              </div>
              <div className="text-2xl font-bold">{stats?.chunks ?? "—"}</div>
              <div className="text-xs text-muted-foreground">Chunks</div>
            </div>
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
              variant="outline"
              size="icon"
              onClick={fetchStats}
              disabled={isLoadingStats}
              className="hover:bg-accent/10 group bg-transparent"
            >
              <RefreshCw className={`h-4 w-4 ${isLoadingStats ? "animate-spin" : "group-hover:rotate-180"} transition-transform duration-500`} />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Stats Display */}
          <div className="rounded-xl border border-border/50 bg-muted/30 p-4">
            {isLoadingStats ? (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Loader2 className="h-4 w-4 animate-spin" />
                Loading statistics...
              </div>
            ) : stats ? (
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Total Documents:</span>
                  <span className="ml-2 font-semibold">{stats.documents}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Total Chunks:</span>
                  <span className="ml-2 font-semibold">{stats.chunks}</span>
                </div>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">Failed to load statistics</p>
            )}
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
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                    geminiStatus.status === "success" 
                      ? "bg-gradient-to-br from-green-500/20 to-emerald-500/20" 
                      : geminiStatus.status === "error"
                        ? "bg-gradient-to-br from-red-500/20 to-rose-500/20"
                        : "bg-gradient-to-br from-blue-500/20 to-cyan-500/20"
                  }`}>
                    {getStatusIcon(geminiStatus.status)}
                  </div>
                  <div>
                    <p className="font-medium">Gemini API</p>
                    <p className={`text-xs ${
                      geminiStatus.status === "success" 
                        ? "text-green-600" 
                        : geminiStatus.status === "error"
                          ? "text-destructive"
                          : "text-muted-foreground"
                    }`}>
                      {geminiStatus.message}
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleTestGemini}
                  disabled={geminiStatus.status === "loading"}
                  className="hover:bg-accent/10 hover:border-accent/50 bg-transparent"
                >
                  {geminiStatus.status === "loading" ? "..." : "Test"}
                </Button>
              </div>

              {/* Embeddings Status */}
              <div className="flex items-center justify-between rounded-xl border border-border/50 p-4 hover-lift glass-strong">
                <div className="flex items-center gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                    embedStatus.status === "success" 
                      ? "bg-gradient-to-br from-green-500/20 to-emerald-500/20" 
                      : embedStatus.status === "error"
                        ? "bg-gradient-to-br from-red-500/20 to-rose-500/20"
                        : "bg-gradient-to-br from-accent/20 to-primary/20"
                  }`}>
                    {getStatusIcon(embedStatus.status)}
                  </div>
                  <div>
                    <p className="font-medium">Embeddings</p>
                    <p className={`text-xs ${
                      embedStatus.status === "success" 
                        ? "text-green-600" 
                        : embedStatus.status === "error"
                          ? "text-destructive"
                          : "text-muted-foreground"
                    }`}>
                      {embedStatus.message}
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleTestEmbed}
                  disabled={embedStatus.status === "loading"}
                  className="hover:bg-accent/10 hover:border-accent/50 bg-transparent"
                >
                  {embedStatus.status === "loading" ? "..." : "Test"}
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
