import { AnnouncementListProps } from "@/types/announcement/announcement";
import AnnouncementItem from "../item";
import * as S from "./style";

const AnnouncementList = ({
  announcements,
  openItemId,
  handleItemClick,
}: AnnouncementListProps) => {
  return (
    <S.List>
      {announcements.map((announcement) => (
        <AnnouncementItem
          key={announcement.id}
          announcement={announcement}
          isOpen={openItemId === announcement.id}
          onClick={() => handleItemClick(announcement.id)}
        />
      ))}
    </S.List>
  );
};

export default AnnouncementList;
