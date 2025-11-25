"use client"

import { Upload, FileUp, Cloud, CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function FileUploadPanel() {
  return (
    <Card className="glass-strong border-border/50 hover-lift card-shine overflow-hidden">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
            <Upload className="h-4 w-4 text-primary-foreground" />
          </div>
          Upload Documents
        </CardTitle>
        <CardDescription>Upload your documents to start asking questions</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="upload-form" className="space-y-4">
          <div className="relative group">
            <input type="file" id="file-input" className="absolute inset-0 cursor-pointer opacity-0 z-10" multiple />
            <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border bg-muted/30 p-8 transition-all group-hover:border-accent group-hover:bg-accent/5 animated-border">
              <div className="relative mb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                  <FileUp className="h-8 w-8 text-accent group-hover:scale-110 transition-transform" />
                </div>
                <Cloud className="absolute -top-2 -right-2 h-6 w-6 text-muted-foreground animate-float" />
              </div>
              <p className="mb-2 text-sm font-medium">Drop files here or click to browse</p>
              <p className="text-xs text-muted-foreground">Supports PDF, DOC, DOCX, TXT files</p>
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                {["PDF", "DOC", "DOCX", "TXT"].map((format) => (
                  <span
                    key={format}
                    className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
                  >
                    {format}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div
            id="upload-status"
            className="flex items-center gap-2 rounded-xl bg-muted/50 p-3 text-sm text-muted-foreground"
          >
            <CheckCircle2 className="h-4 w-4 text-accent" />
            Ready to upload
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all glow-sm group"
          >
            <Upload className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
            Upload Files
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
