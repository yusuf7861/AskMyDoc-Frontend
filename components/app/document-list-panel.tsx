"use client"

import { useState, useEffect, useCallback } from "react"
import { FileText, RefreshCw, Trash2, FolderOpen, Download, Loader2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { listDocuments, deleteAllDocuments, getDocumentFileUrl, formatFileSize } from "@/lib/api"
import { DocumentItem } from "@/lib/types"

interface DocumentListPanelProps {
  refreshTrigger?: number
  onDocumentsChange?: (documents: DocumentItem[]) => void
}

export function DocumentListPanel({ refreshTrigger, onDocumentsChange }: DocumentListPanelProps) {
  const [documents, setDocuments] = useState<DocumentItem[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  const fetchDocuments = useCallback(async () => {
    setIsLoading(true)
    try {
      const docs = await listDocuments()
      setDocuments(docs)
      onDocumentsChange?.(docs)
    } catch (error) {
      console.error("Failed to fetch documents:", error)
    } finally {
      setIsLoading(false)
    }
  }, [onDocumentsChange])

  useEffect(() => {
    fetchDocuments()
  }, [fetchDocuments, refreshTrigger])

  const handleDeleteAll = async () => {
    if (!confirm("Are you sure you want to delete all documents?")) return
    
    setIsDeleting(true)
    try {
      await deleteAllDocuments()
      setDocuments([])
      onDocumentsChange?.([])
    } catch (error) {
      console.error("Failed to delete documents:", error)
    } finally {
      setIsDeleting(false)
    }
  }

  const handleDownload = (doc: DocumentItem) => {
    window.open(getDocumentFileUrl(doc.id), "_blank")
  }

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
              <span className="font-semibold text-accent">
                {documents.length}
              </span>{" "}
              documents uploaded
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={fetchDocuments}
              disabled={isLoading}
              className="hover:bg-accent/10 hover:border-accent/50 transition-all group bg-transparent"
            >
              <RefreshCw className={`h-4 w-4 ${isLoading ? "animate-spin" : "group-hover:rotate-180"} transition-transform duration-500`} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleDeleteAll}
              disabled={isDeleting || documents.length === 0}
              className="text-destructive hover:bg-destructive hover:text-destructive-foreground bg-transparent transition-all group"
            >
              {isDeleting ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Trash2 className="h-4 w-4 group-hover:scale-110 transition-transform" />
              )}
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="max-h-[300px] space-y-2 overflow-auto rounded-xl border border-border/50 bg-muted/30 p-4">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <Loader2 className="h-8 w-8 text-accent animate-spin mb-4" />
              <p className="text-sm text-muted-foreground">Loading documents...</p>
            </div>
          ) : documents.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-muted to-muted/50">
                <FolderOpen className="h-8 w-8 text-muted-foreground" />
              </div>
              <p className="text-sm font-medium text-muted-foreground">No documents uploaded yet</p>
              <p className="mt-1 text-xs text-muted-foreground/70">Upload files to get started</p>
            </div>
          ) : (
            documents.map((doc) => (
              <div
                key={doc.id}
                className="flex items-center justify-between rounded-lg border border-border/50 bg-background/50 p-3 hover:bg-accent/5 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                    <FileText className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium truncate max-w-[180px]">{doc.file_name}</p>
                    <p className="text-xs text-muted-foreground">
                      {doc.page_count} pages • {formatFileSize(doc.size_bytes)}
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDownload(doc)}
                  className="h-8 w-8 hover:bg-accent/10"
                >
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  )
}
