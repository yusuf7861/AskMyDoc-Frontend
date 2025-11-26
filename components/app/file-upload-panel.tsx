"use client"

import { useState, useRef } from "react"
import { Upload, FileUp, Cloud, CheckCircle2, Loader2, AlertCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { uploadDocument } from "@/lib/api"
import { DocumentItem } from "@/lib/types"

interface FileUploadPanelProps {
  onUploadSuccess?: (document: DocumentItem) => void
}

export function FileUploadPanel({ onUploadSuccess }: FileUploadPanelProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [status, setStatus] = useState<{ type: "ready" | "success" | "error"; message: string }>({
    type: "ready",
    message: "Ready to upload"
  })
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      setSelectedFiles(Array.from(files))
      setStatus({ type: "ready", message: `${files.length} file(s) selected` })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (selectedFiles.length === 0) {
      setStatus({ type: "error", message: "Please select a file first" })
      return
    }

    setIsUploading(true)
    setStatus({ type: "ready", message: "Uploading..." })

    try {
      for (const file of selectedFiles) {
        const result = await uploadDocument(file)
        onUploadSuccess?.(result)
      }
      setStatus({ type: "success", message: `Successfully uploaded ${selectedFiles.length} file(s)` })
      setSelectedFiles([])
      if (fileInputRef.current) {
        fileInputRef.current.value = ""
      }
    } catch (error) {
      setStatus({ 
        type: "error", 
        message: error instanceof Error ? error.message : "Upload failed" 
      })
    } finally {
      setIsUploading(false)
    }
  }

  const getStatusIcon = () => {
    switch (status.type) {
      case "success":
        return <CheckCircle2 className="h-4 w-4 text-green-500" />
      case "error":
        return <AlertCircle className="h-4 w-4 text-destructive" />
      default:
        return isUploading 
          ? <Loader2 className="h-4 w-4 text-accent animate-spin" />
          : <CheckCircle2 className="h-4 w-4 text-accent" />
    }
  }

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
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative group">
            <input 
              type="file" 
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".pdf"
              className="absolute inset-0 cursor-pointer opacity-0 z-10" 
              multiple 
              disabled={isUploading}
            />
            <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border bg-muted/30 p-8 transition-all group-hover:border-accent group-hover:bg-accent/5 animated-border">
              <div className="relative mb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                  <FileUp className="h-8 w-8 text-accent group-hover:scale-110 transition-transform" />
                </div>
                <Cloud className="absolute -top-2 -right-2 h-6 w-6 text-muted-foreground animate-float" />
              </div>
              <p className="mb-2 text-sm font-medium">
                {selectedFiles.length > 0 
                  ? `${selectedFiles.length} file(s) selected`
                  : "Drop files here or click to browse"
                }
              </p>
              <p className="text-xs text-muted-foreground">Supports PDF files</p>
              {selectedFiles.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2 justify-center">
                  {selectedFiles.map((file, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent"
                    >
                      {file.name}
                    </span>
                  ))}
                </div>
              )}
              {selectedFiles.length === 0 && (
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                    PDF
                  </span>
                </div>
              )}
            </div>
          </div>

          <div
            className={`flex items-center gap-2 rounded-xl p-3 text-sm ${
              status.type === "error" 
                ? "bg-destructive/10 text-destructive" 
                : status.type === "success"
                  ? "bg-green-500/10 text-green-600"
                  : "bg-muted/50 text-muted-foreground"
            }`}
          >
            {getStatusIcon()}
            {status.message}
          </div>

          <Button
            type="submit"
            disabled={isUploading || selectedFiles.length === 0}
            className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all glow-sm group disabled:opacity-50"
          >
            {isUploading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Uploading...
              </>
            ) : (
              <>
                <Upload className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Upload Files
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
