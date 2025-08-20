import type { Subject } from "@/types/subject/subject";
import type { Unit } from "@/types/unit/unit";
import type { UserWithClassInfo } from "@/types/user/user";

export interface ApiHandout {
  id: number;
  title: string;
  description: string;
  fileUrl: string;
  subject: Subject;
  unit?: Unit;
  authorId: number;
}

export interface HandoutDetail {
  id: number;
  title: string;
  description: string;
  author: UserWithClassInfo;
  fileUrl: string;
  subject: Subject;
  authorId: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreateHandoutReq {
  title: string;
  description: string;
  fileUrl: string;
  subjectId: number;
  unitId?: number;
}

export interface UpdateHandoutReq {
  id: number;
  title: string;
  description: string;
  fileUrl: string;
  subjectId: number;
  unitId?: number;
}

export interface HandoutsApiResponse {
  handouts: ApiHandout[];
}

export interface Handout {
  id: number;
  extension: "DOCX" | "PPTX" | "XLSX" | "HWP" | "PDF";
  file_url?: string;
  title: string;
  date: string;
  author: string;
}

export interface HandoutsHeaderProps {
  sortOrder: string;
  handleSortChange: (order: string) => void;
  searchTerm: string;
  handleSearchChange: (term: string) => void;
}

export interface HandoutsListProps {
  handouts: Handout[];
}

export interface HandoutsItemProps {
  handout: Handout;
  className?: string;
  onClick?: () => void;
}
