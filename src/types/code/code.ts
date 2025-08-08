export interface CodeType {
  id: number;
  class?: string;
  className: string;
  assignment?: string;
  title: string;
  student: string;
  language: "python" | "sql" | "javascript";
  description?: string;
  code: string;
  likes: number;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
}
