"use client"

import { MessageSquare, Send, Languages, Hash, Sparkles, BookOpen, Quote } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export function AskQuestionPanel() {
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
              placeholder="What would you like to know?"
              className="pr-24 h-12 text-base bg-muted/50 border-border/50 focus:border-accent/50 focus:bg-background transition-all rounded-xl"
            />
            <Button
              id="ask-btn"
              size="sm"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all glow-sm group"
            >
              <Send className="mr-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              Ask
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
            <Input id="topk" type="number" defaultValue={5} min={1} max={20} className="w-20 h-8 bg-background" />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="translate" className="border-accent data-[state=checked]:bg-accent" />
            <Label htmlFor="translate" className="flex items-center gap-2 text-sm cursor-pointer">
              <Languages className="h-4 w-4 text-muted-foreground" />
              Translate Response
            </Label>
          </div>
        </div>

        <div
          id="ask-status"
          className="flex items-center gap-2 rounded-xl bg-muted/50 p-3 text-sm text-muted-foreground"
        >
          <div className="status-dot" />
          Ready to answer your questions
        </div>

        {/* Answer Section */}
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-accent" />
              Answer
            </Label>
            <div
              id="answer"
              className="min-h-[120px] rounded-xl border border-border/50 bg-card p-4 text-sm glass-strong"
            >
              <p className="text-muted-foreground italic">Your answer will appear here...</p>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Quote className="h-4 w-4 text-accent" />
              Citations
            </Label>
            <div
              id="citations"
              className="max-h-[200px] overflow-auto rounded-xl border border-border/50 bg-muted/30 p-4 text-sm"
            >
              <p className="text-muted-foreground italic">Source citations will appear here...</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
