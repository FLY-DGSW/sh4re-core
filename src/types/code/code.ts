export interface CodeType {
  id: number;
  title: string;
  student: string;
  language: "python" | "sql" | "javascript";
  code: string;
  likeCount: number;
  className: string;
  assignment?: string;
  createdAt: string;
  updatedAt: string;
  description?: string;
}

export interface CodeDetailType {
  id: number;
  title: string;
  student: string;
  language: "python" | "sql" | "javascript";
  description?: string;
  code: string;
  likeCount: number;
  isLikedByUser: boolean;
  className: string;
  assignment?: string;
  createdAt: string;
  updatedAt: string;
}

export interface UpdateCodeReq {
  title: string;
  language: "python" | "sql" | "javascript";
  description?: string;
  code: string;
  className: string;
  assignment?: string;
}
