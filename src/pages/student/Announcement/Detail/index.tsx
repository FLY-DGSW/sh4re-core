import { useParams, useNavigate } from "react-router-dom";
import { useAnnouncement } from "@/hooks/announcements/useAnnouncement";
import BackButton from "@/components/ui/BackButton";
import * as S from "./style";

const formatDateTimeToMinute = (dateString?: string) => {
  if (!dateString) return "";

  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");

  return `${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분`;
};

const AnnouncementsDetailPage = () => {
  const { announcementId } = useParams<{ announcementId: string }>();
  const navigate = useNavigate();
  const id = announcementId ? parseInt(announcementId, 10) : undefined;
  const { announcement, isLoading, error } = useAnnouncement(id);

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>오류 발생: {error.message}</div>;

  if (!announcement) {
    return <div>공지사항을 찾을 수 없습니다.</div>;
  }

  const handleGoBack = () => {
    navigate("/announcements");
  };

  return (
    <S.Container>
      <BackButton onClick={handleGoBack}>공지사항 목록</BackButton>
      <S.MainContent>
        <S.Header>
          <S.Label label={announcement.label as "과제" | "공지"}>[{announcement.label}]</S.Label>
          <S.Title>{announcement.title}</S.Title>
          <S.Meta>
            {formatDateTimeToMinute(announcement.createdAt)} ·{" "}
            {announcement.author}
          </S.Meta>
        </S.Header>
        <S.Content>{announcement.content}</S.Content>
      </S.MainContent>
    </S.Container>
  );
};

export default AnnouncementsDetailPage;
