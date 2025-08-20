import type { Subject } from "@/types/subject/subject";
import type { Unit } from "@/types/unit/unit";

export interface ApiAssignment {
  id: number;
  title: string;
  description: string;
  inputExample?: string;
  outputExample?: string;
  deadline: string;
  subject: Subject;
  unit?: Unit;
  userId: number;
}

export interface CreateAssignmentReq {
  subjectId: number;
  title: string;
  description: string;
  inputExample?: string;
  outputExample?: string;
  deadline: string;
  unitId?: number;
}

export interface UpdateAssignmentReq {
  id: number;
  title: string;
  description: string;
  inputExample?: string;
  outputExample?: string;
  deadline: string;
  unitId?: number;
}

export interface DeleteAssignmentReq {
  id: number;
}

export interface AssignmentsApiResponse {
  assignments: ApiAssignment[];
}

export interface AssignmentApiResponse {
  assignment: ApiAssignment;
}

export interface Assignment {
  id: number;
  label: "할당됨" | "제출됨" | "누락됨";
  title: string;
  date: string;
  author: string;
  content?: string;
}

export interface Chapter {
  id: number;
  title: string;
  description: string;
  assignments: Assignment[];
}

export interface AssignmentLabelProps {
  label: "할당됨" | "제출됨" | "누락됨";
}

export interface AssignmentHeaderProps {
  sortOrder: string;
  handleSortChange: (order: string) => void;
  searchTerm: string;
  handleSearchChange: (term: string) => void;
  showAssignedOnly: boolean;
  handleShowAssignedOnlyChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

export interface ChapterListProps {
  chapters: Chapter[];
  openAssignmentId: number | null;
  handleAssignmentClick: (assignment: Assignment) => void;
  calculateProgress: (assignments: Assignment[]) => {
    percentage: number;
    completed: number;
    total: number;
  };
}

export interface ChapterItemProps {
  chapter: Chapter;
  openAssignmentId: number | null;
  handleAssignmentClick: (assignment: Assignment) => void;
  calculateProgress: (assignments: Assignment[]) => {
    percentage: number;
    completed: number;
    total: number;
  };
}

export interface AssignmentListProps {
  assignments: Assignment[];
  openAssignmentId: number | null;
  handleAssignmentClick: (assignment: Assignment) => void;
}

export interface AssignmentItemProps {
  assignment: Assignment;
  isOpen?: boolean;
  onClick?: () => void;
  className?: string;
}
