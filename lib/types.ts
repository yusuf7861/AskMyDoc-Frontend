export interface DocumentItem {
  id: number;
  file_name: string;
  page_count: number;
  size_bytes: number;
}

export interface AskRequest {
  question: string;
  top_k: number;
  document_ids?: number[];
  translate_sources?: boolean;
}

export interface AskResponse {
  answer: string;
  citations?: Array<{
    file_name: string;
    page_number: number;
    snippet: string;
    translated_snippet?: string;
  }>;
}

export interface StatsResponse {
  documents: number;
  chunks: number;
}
