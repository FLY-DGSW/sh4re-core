import { AnnouncementItemProps } from "@/types/announcement/announcement";
import * as S from "./style";

const AnnouncementItem = ({
  announcement,
  isOpen = false,
  onClick = () => {},
  className,
}: AnnouncementItemProps) => {
  return (
    <S.Wrapper className={className}>
      <S.Item onClick={onClick}>
        <S.Label label={announcement.label}>[{announcement.label}]</S.Label>
        <S.Title>{announcement.title}</S.Title>
        <S.Meta>
          <S.Date>
            {announcement.date} · {announcement.author}
          </S.Date>
          <S.ChevronIcon $isOpen={isOpen}>▼</S.ChevronIcon>
        </S.Meta>
      </S.Item>
      <S.Content $isOpen={isOpen}>{announcement.content}</S.Content>
    </S.Wrapper>
  );
};

export default AnnouncementItem;
