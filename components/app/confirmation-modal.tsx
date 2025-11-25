"use client"

import { AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ConfirmationModal() {
  return (
    <div
      id="confirm-modal"
      className="fixed inset-0 z-50 hidden items-center justify-center bg-background/80 backdrop-blur-sm"
    >
      <div className="mx-4 w-full max-w-md rounded-xl border border-border bg-card p-6 shadow-2xl">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-destructive/10">
            <AlertTriangle className="h-6 w-6 text-destructive" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold">Confirm Action</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Are you sure you want to proceed? This action cannot be undone.
            </p>
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-3">
          <Button id="confirm-cancel" variant="outline">
            Cancel
          </Button>
          <Button id="confirm-ok" variant="destructive">
            Confirm
          </Button>
        </div>
      </div>
    </div>
  )
}
