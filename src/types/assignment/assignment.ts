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
  handleSearch: (term: string) => void;
}

export interface ChapterListProps {
  chapters: Chapter[];
  openChapterId: number | null;
  openAssignmentId: number | null;
  handleChapterClick: (id: number) => void;
  handleAssignmentClick: (assignment: Assignment) => void;
  calculateProgress: (assignments: Assignment[]) => {
    percentage: number;
    completed: number;
    total: number;
  };
}

export interface ChapterItemProps {
  chapter: Chapter;
  isOpen: boolean;
  openAssignmentId: number | null;
  onClick: () => void;
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
