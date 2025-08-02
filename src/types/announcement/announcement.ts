export interface AnnouncementProps {
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
