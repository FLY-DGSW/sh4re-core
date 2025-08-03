import { useParams } from "react-router-dom";
import { useAnnouncement } from "@/hooks/announcements/useAnnouncement";
import * as S from "./style";

const AnnouncementsDetailPage = () => {
  const { announcementId } = useParams<{ announcementId: string }>();
  const id = announcementId ? parseInt(announcementId, 10) : undefined;
  const announcement = useAnnouncement(id);

  if (id === undefined || isNaN(id) || !announcement) {
    return <div>공지사항을 찾을 수 없습니다.</div>;
  }

  return (
    <S.Container>
      <S.MainContent>
        <S.Header>
          <S.Label label={announcement.label}>[{announcement.label}]</S.Label>
          <S.Title>{announcement.title}</S.Title>
          <S.Meta>
            {announcement.date} · {announcement.author}
          </S.Meta>
        </S.Header>
        <S.Content>{announcement.content}</S.Content>
      </S.MainContent>
    </S.Container>
  );
};

export default AnnouncementsDetailPage;
