export interface CodeType {
  id: number;
  title: string;
  authorName: string;
  language: "python" | "sql" | "javascript";
  code: string;
  likeCount: number;
  className: string;
  assignmentTitle?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CodeDetailType {
  id: number;
  title: string;
  authorName: string;
  language: "python" | "sql" | "javascript";
  description?: string;
  code: string;
  likeCount: number;
  isLikedByUser: boolean;
  className: string;
  assignmentTitle?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateCodeReq {
  title: string;
  language: "python" | "sql" | "javascript";
  description?: string;
  code: string;
  classPlacementId: number;
  assignmentId?: number;
  useAiDescription?: boolean;
}

export interface UpdateCodeReq {
  title: string;
  language: "python" | "sql" | "javascript";
  description?: string;
  code: string;
  classPlacementId: number;
  assignmentId?: number;
}

export interface CodesApiResponse {
  codes: CodeType[];
}
