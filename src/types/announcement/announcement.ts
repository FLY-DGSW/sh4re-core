export interface Announcement {
  id: number;
  label: "과제" | "공지";
  title: string;
  date: string;
  author: string;
  content?: string;
}

export interface AnnouncementLabelProps {
  label: "과제" | "공지";
}

export interface AnnouncementHeaderProps {
  sortOrder: string;
  showNoticesOnly: boolean;
  handleSortChange: (order: string) => void;
  handleSearch: (term: string) => void;
  handleShowNoticesOnlyChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface AnnouncementListProps {
  announcements: Announcement[];
  openItemId: number | null;
  handleItemClick: (id: number) => void;
}

export interface AnnouncementItemProps {
  announcement: Announcement;
  isOpen?: boolean;
  onClick?: () => void;
  className?: string;
}
