"use client"

import { useState } from "react"
import { Sidebar } from "@/components/app/sidebar"
import { Topbar } from "@/components/app/topbar"
import { FileUploadPanel } from "@/components/app/file-upload-panel"
import { DocumentListPanel } from "@/components/app/document-list-panel"
import { AskQuestionPanel } from "@/components/app/ask-question-panel"
import { SystemStatusPanel } from "@/components/app/system-status-panel"
import { ConfirmationModal } from "@/components/app/confirmation-modal"
import { DashboardOverview } from "@/components/app/dashboard-overview"

type ActivePanel = "dashboard" | "documents" | "ask" | "status"

export default function AppDashboard() {
  const [activePanel, setActivePanel] = useState<ActivePanel>("dashboard")
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen dashboard-gradient noise-overlay relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-primary/5 to-accent/5 blur-3xl" />
      <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-gradient-to-br from-accent/5 to-primary/5 blur-3xl" />

      <Sidebar
        activePanel={activePanel}
        setActivePanel={setActivePanel}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      <div className="flex flex-1 flex-col overflow-hidden relative">
        <Topbar onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />

        <main className="flex-1 overflow-auto p-6">
          {activePanel === "dashboard" && (
            <div className="space-y-6 animate-fade-in-up">
              <DashboardOverview />
              <div className="grid gap-6 lg:grid-cols-2">
                <FileUploadPanel />
                <DocumentListPanel />
              </div>
              <AskQuestionPanel />
            </div>
          )}

          {activePanel === "documents" && (
            <div className="grid gap-6 lg:grid-cols-2 animate-fade-in-up">
              <FileUploadPanel />
              <DocumentListPanel />
            </div>
          )}

          {activePanel === "ask" && (
            <div className="animate-fade-in-up">
              <AskQuestionPanel />
            </div>
          )}

          {activePanel === "status" && (
            <div className="animate-fade-in-up">
              <SystemStatusPanel />
            </div>
          )}
        </main>
      </div>

      <ConfirmationModal />
    </div>
  )
}
