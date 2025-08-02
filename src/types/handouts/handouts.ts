export interface HandoutProps {
  id: number;
  extension: "DOCX" | "PPTX" | "XLSX" | "HWP" | "PDF";
  file_url?: string;
  title: string;
  date: string;
  author: string;
}
