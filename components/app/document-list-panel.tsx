"use client"

import { FileText, RefreshCw, Trash2, FolderOpen } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function DocumentListPanel() {
  return (
    <Card className="glass-strong border-border/50 hover-lift card-shine overflow-hidden">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-primary">
                <FileText className="h-4 w-4 text-primary-foreground" />
              </div>
              Your Documents
            </CardTitle>
            <CardDescription className="mt-1">
              <span id="doc-count" className="font-semibold text-accent">
                0
              </span>{" "}
              documents uploaded
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <Button
              id="refresh-btn"
              variant="outline"
              size="icon"
              className="hover:bg-accent/10 hover:border-accent/50 transition-all group bg-transparent"
            >
              <RefreshCw className="h-4 w-4 group-hover:rotate-180 transition-transform duration-500" />
            </Button>
            <Button
              id="clear-all-btn"
              variant="outline"
              size="icon"
              className="text-destructive hover:bg-destructive hover:text-destructive-foreground bg-transparent transition-all group"
            >
              <Trash2 className="h-4 w-4 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div
          id="docs"
          className="max-h-[300px] space-y-2 overflow-auto rounded-xl border border-border/50 bg-muted/30 p-6"
        >
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-muted to-muted/50">
              <FolderOpen className="h-8 w-8 text-muted-foreground" />
            </div>
            <p className="text-sm font-medium text-muted-foreground">No documents uploaded yet</p>
            <p className="mt-1 text-xs text-muted-foreground/70">Upload files to get started</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
