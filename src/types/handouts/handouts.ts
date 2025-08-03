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
  handleSearch: (term: string) => void;
}

export interface HandoutsListProps {
  handouts: Handout[];
}

export interface HandoutsItemProps {
  handout: Handout;
  className?: string;
  onClick?: () => void;
}
