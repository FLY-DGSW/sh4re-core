export interface Announcement {
  id: number;
  label: "과제" | "공지";
  title: string;
  author: string;
  content?: string;
  schoolYear?: number;
  grade?: number;
  classNumber?: number;
  userId?: number;
  createdAt?: string;
}

export interface AnnouncementsApiResponse {
  ok: boolean;
  code: string;
  message: string;
  data: {
    announcements: Announcement[];
  };
}

export interface AnnouncementsLabelProps {
  label: "과제" | "공지";
}

export interface AnnouncementsHeaderProps {
  sortOrder: string;
  showNoticesOnly: boolean;
  handleSortChange: (order: string) => void;
  searchTerm: string;
  handleSearchChange: (term: string) => void;
  handleShowNoticesOnlyChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface AnnouncementsListProps {
  announcements: Announcement[];
  openItemId: number | null;
  handleItemClick: (id: number) => void;
}

export interface AnnouncementsItemProps {
  announcement: Announcement;
  isOpen?: boolean;
  onClick?: () => void;
  className?: string;
}
