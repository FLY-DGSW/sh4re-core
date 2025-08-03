export interface Announcements {
  id: number;
  label: "과제" | "공지";
  title: string;
  date: string;
  author: string;
  content?: string;
}

export interface AnnouncementsLabelProps {
  label: "과제" | "공지";
}

export interface AnnouncementsHeaderProps {
  sortOrder: string;
  showNoticesOnly: boolean;
  handleSortChange: (order: string) => void;
  handleSearch: (term: string) => void;
  handleShowNoticesOnlyChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface AnnouncementsListProps {
  announcements: Announcements[];
  openItemId: number | null;
  handleItemClick: (id: number) => void;
}

export interface AnnouncementsItemProps {
  announcement: Announcements;
  isOpen?: boolean;
  onClick?: () => void;
  className?: string;
}
