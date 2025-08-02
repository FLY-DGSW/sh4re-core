import { AnnouncementProps } from "@/types/announcement/announcement";
import * as S from "./style";

const announcements: AnnouncementProps[] = [
  {
    id: 1,
    label: "과제",
    title: "제목",
    date: "2025.05.12",
    author: "작성자",
  },
  {
    id: 2,
    label: "공지",
    title: "제 2회 두카미 주최 알고리즘 대회 우승 축하합니다~",
    date: "2025.05.12",
    author: "작성자",
  },
  {
    id: 3,
    label: "과제",
    title: "과제테스트 하나 내봤어요~ 풀어보세요~",
    date: "2025.05.12",
    author: "작성자",
  },
  {
    id: 4,
    label: "과제",
    title: "제목",
    date: "2025.05.12",
    author: "작성자",
  },
  {
    id: 5,
    label: "과제",
    title: "제목",
    date: "2025.05.12",
    author: "작성자",
  },
  {
    id: 6,
    label: "공지",
    title: "코테 만점자 리스트 - 축하합니다~~❤️",
    date: "2025.05.12",
    author: "작성자",
  },
  {
    id: 7,
    label: "공지",
    title: "제목",
    date: "2025.05.12",
    author: "작성자",
  },
  {
    id: 8,
    label: "공지",
    title: "제목",
    date: "2025.05.12",
    author: "작성자",
  },
  {
    id: 9,
    label: "공지",
    title: "제목",
    date: "2025.05.12",
    author: "작성자",
  },
  {
    id: 10,
    label: "공지",
    title: "제목",
    date: "2025.05.12",
    author: "작성자",
  },
  {
    id: 11,
    label: "공지",
    title: "제목",
    date: "2025.05.12",
    author: "작성자",
  },
  {
    id: 12,
    label: "공지",
    title: "제목",
    date: "2025.05.12",
    author: "작성자",
  },
  {
    id: 13,
    label: "공지",
    title: "제목",
    date: "2025.05.12",
    author: "작성자",
  },
  {
    id: 14,
    label: "공지",
    title: "제목",
    date: "2025.05.12",
    author: "작성자",
  },
];

const AnnouncementPage = () => {
  return (
    <S.Container>
      <S.MainContent>
        <S.PageTitle>공지사항</S.PageTitle>
        <S.AnnouncementList>
          {announcements.map((announcement) => (
            <S.AnnouncementItem key={announcement.id}>
              <S.AnnouncementLabel label={announcement.label}>
                [{announcement.label}]
              </S.AnnouncementLabel>
              <S.AnnouncementTitle>{announcement.title}</S.AnnouncementTitle>
              <S.AnnouncementMeta>
                <S.AnnouncementDate>
                  {announcement.date} · {announcement.author}
                </S.AnnouncementDate>
                <S.ChevronIcon>▼</S.ChevronIcon>
              </S.AnnouncementMeta>
            </S.AnnouncementItem>
          ))}
        </S.AnnouncementList>
      </S.MainContent>
    </S.Container>
  );
};

export default AnnouncementPage;
