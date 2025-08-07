import { AnnouncementsItemProps } from "@/types/announcements/announcements";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

const formatDateToDay = (dateString?: string) => {
  if (!dateString) return "";
  
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  
  return `${year}. ${month}. ${day}`;
};

const AnnouncementsItem = ({
  announcement,
  isOpen = false,
  onClick = () => {},
  className,
}: AnnouncementsItemProps) => {
  const navigate = useNavigate();

  const handleContentClick = () => {
    if (isOpen) {
      navigate(`/announcements/${announcement.id}`);
    }
  };

  const dateToDisplay = announcement.createdAt;

  return (
    <S.Wrapper className={className}>
      <S.Item onClick={onClick}>
        <S.Label label={announcement.label}>[{announcement.label}]</S.Label>
        <S.Title>{announcement.title}</S.Title>
        <S.Meta>
          <S.Date>
            {formatDateToDay(dateToDisplay)} · {announcement.author}
          </S.Date>
          <S.ChevronIcon $isOpen={isOpen}>▼</S.ChevronIcon>
        </S.Meta>
      </S.Item>
      <S.Content $isOpen={isOpen} onClick={handleContentClick}>
        {announcement.content}
      </S.Content>
    </S.Wrapper>
  );
};

export default AnnouncementsItem;
