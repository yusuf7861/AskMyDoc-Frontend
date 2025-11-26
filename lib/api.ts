import { DocumentItem, AskRequest, AskResponse, StatsResponse } from "./types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api/v1";

// Helper function for handling API responses
async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || `HTTP error! status: ${response.status}`);
  }
  return response.json();
}

// ==================== Document APIs ====================

/**
 * Upload a document (PDF)
 * POST /api/v1/documents
 */
export async function uploadDocument(file: File): Promise<DocumentItem> {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`${API_BASE_URL}/documents`, {
    method: "POST",
    body: formData,
  });

  return handleResponse<DocumentItem>(response);
}

/**
 * List all documents
 * GET /api/v1/documents
 */
export async function listDocuments(): Promise<DocumentItem[]> {
  const response = await fetch(`${API_BASE_URL}/documents`);
  return handleResponse<DocumentItem[]>(response);
}

/**
 * Delete all documents
 * DELETE /api/v1/documents
 */
export async function deleteAllDocuments(): Promise<{ message: string }> {
  const response = await fetch(`${API_BASE_URL}/documents`, {
    method: "DELETE",
  });
  return handleResponse<{ message: string }>(response);
}

/**
 * Get original PDF file
 * GET /api/v1/documents/{id}/file
 */
export function getDocumentFileUrl(id: number): string {
  return `${API_BASE_URL}/documents/${id}/file`;
}

// ==================== Chat/RAG APIs ====================

/**
 * Ask a question (RAG Query)
 * POST /api/v1/chat/ask
 */
export async function askQuestion(request: AskRequest): Promise<AskResponse> {
  const response = await fetch(`${API_BASE_URL}/chat/ask`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  return handleResponse<AskResponse>(response);
}

// ==================== System/Debug APIs ====================

/**
 * Get system stats
 * GET /api/v1/debug/stats
 */
export async function getStats(): Promise<StatsResponse> {
  const response = await fetch(`${API_BASE_URL}/debug/stats`);
  return handleResponse<StatsResponse>(response);
}

/**
 * Test Gemini/LLM connection
 * GET /api/v1/test/gemini
 */
export async function testGemini(): Promise<string> {
  const response = await fetch(`${API_BASE_URL}/test/gemini`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.text();
}

/**
 * Test Embedding connection
 * GET /api/v1/test/embed
 */
export async function testEmbedding(): Promise<string> {
  const response = await fetch(`${API_BASE_URL}/test/embed`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.text();
}

// ==================== Utility Functions ====================

/**
 * Format file size from bytes to human readable
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}
