"use client"

import { useState } from "react"
import { MessageSquare, Send, Languages, Hash, Sparkles, BookOpen, Quote, Loader2, AlertCircle, FileText } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { askQuestion } from "@/lib/api"
import { AskResponse, DocumentItem } from "@/lib/types"

interface AskQuestionPanelProps {
  documents?: DocumentItem[]
}

export function AskQuestionPanel({ documents = [] }: AskQuestionPanelProps) {
  const [question, setQuestion] = useState("")
  const [topK, setTopK] = useState(5)
  const [translateSources, setTranslateSources] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState<AskResponse | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleAsk = async () => {
    if (!question.trim()) {
      setError("Please enter a question")
      return
    }

    if (documents.length === 0) {
      setError("Please upload documents first")
      return
    }

    setIsLoading(true)
    setError(null)
    setResponse(null)

    try {
      const result = await askQuestion({
        question: question.trim(),
        top_k: topK,
        document_ids: documents.map(d => d.id),
        translate_sources: translateSources
      })
      setResponse(result)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to get answer")
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleAsk()
    }
  }

  return (
    <Card className="glass-strong border-border/50 hover-lift overflow-hidden">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent glow-animated">
            <MessageSquare className="h-4 w-4 text-primary-foreground" />
          </div>
          Ask a Question
          <Sparkles className="h-4 w-4 text-accent animate-pulse ml-1" />
        </CardTitle>
        <CardDescription>Ask anything about your uploaded documents</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Question Input */}
        <div className="space-y-2">
          <Label htmlFor="question" className="flex items-center gap-2">
            Your Question
            <span className="text-xs text-muted-foreground">(Natural language supported)</span>
          </Label>
          <div className="relative group">
            <Input
              id="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="What would you like to know?"
              disabled={isLoading}
              className="pr-24 h-12 text-base bg-muted/50 border-border/50 focus:border-accent/50 focus:bg-background transition-all rounded-xl"
            />
            <Button
              onClick={handleAsk}
              disabled={isLoading || !question.trim()}
              size="sm"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all glow-sm group"
            >
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Send className="mr-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              )}
              {isLoading ? "..." : "Ask"}
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6 rounded-xl bg-muted/30 p-4 border border-border/50">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10">
              <Hash className="h-4 w-4 text-accent" />
            </div>
            <Label htmlFor="topk" className="text-sm">
              Top-K Results
            </Label>
            <Input 
              id="topk" 
              type="number" 
              value={topK}
              onChange={(e) => setTopK(parseInt(e.target.value) || 5)}
              min={1} 
              max={20} 
              className="w-20 h-8 bg-background" 
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox 
              id="translate" 
              checked={translateSources}
              onCheckedChange={(checked) => setTranslateSources(checked === true)}
              className="border-accent data-[state=checked]:bg-accent" 
            />
            <Label htmlFor="translate" className="flex items-center gap-2 text-sm cursor-pointer">
              <Languages className="h-4 w-4 text-muted-foreground" />
              Translate Response
            </Label>
          </div>
        </div>

        {/* Status */}
        <div
          className={`flex items-center gap-2 rounded-xl p-3 text-sm ${
            error 
              ? "bg-destructive/10 text-destructive" 
              : isLoading 
                ? "bg-accent/10 text-accent"
                : "bg-muted/50 text-muted-foreground"
          }`}
        >
          {error ? (
            <AlertCircle className="h-4 w-4" />
          ) : isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <div className="status-dot" />
          )}
          {error || (isLoading ? "Processing your question..." : "Ready to answer your questions")}
        </div>

        {/* Answer Section */}
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-accent" />
              Answer
            </Label>
            <div className="min-h-[120px] rounded-xl border border-border/50 bg-card p-4 text-sm glass-strong">
              {response?.answer ? (
                <p className="whitespace-pre-wrap">{response.answer}</p>
              ) : (
                <p className="text-muted-foreground italic">Your answer will appear here...</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Quote className="h-4 w-4 text-accent" />
              Citations
            </Label>
            <div className="max-h-[200px] overflow-auto rounded-xl border border-border/50 bg-muted/30 p-4 text-sm space-y-3">
              {response?.citations && response.citations.length > 0 ? (
                response.citations.map((citation, index) => (
                  <div 
                    key={index} 
                    className="rounded-lg border border-border/50 bg-background/50 p-3 space-y-2"
                  >
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <FileText className="h-3 w-3" />
                      <span className="font-medium">{citation.file_name}</span>
                      <span>•</span>
                      <span>Page {citation.page_number}</span>
                    </div>
                    <p className="text-sm">{citation.snippet}</p>
                    {citation.translated_snippet && (
                      <p className="text-sm text-muted-foreground border-t border-border/50 pt-2 mt-2">
                        <span className="font-medium">Translated: </span>
                        {citation.translated_snippet}
                      </p>
                    )}
                  </div>
                ))
              ) : (
                <p className="text-muted-foreground italic">Source citations will appear here...</p>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
