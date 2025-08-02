export interface AssignmentProps {
  id: number;
  label: "할당됨" | "제출됨" | "누락됨";
  title: string;
  date: string;
  author: string;
  content?: string;
}

export interface ChapterProps {
  id: number;
  title: string;
  description: string;
  assignments: AssignmentProps[];
}

export interface AssignmentLabelProps {
  label: "할당됨" | "제출됨" | "누락됨";
}
