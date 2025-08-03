import { AnnouncementsListProps } from "@/types/announcements/announcements";
import AnnouncementsItem from "../item";
import * as S from "./style";

const AnnouncementsList = ({
  announcements,
  openItemId,
  handleItemClick,
}: AnnouncementsListProps) => {
  return (
    <S.List>
      {announcements.map((announcement) => (
        <AnnouncementsItem
          key={announcement.id}
          announcement={announcement}
          isOpen={openItemId === announcement.id}
          onClick={() => handleItemClick(announcement.id)}
        />
      ))}
    </S.List>
  );
};

export default AnnouncementsList;
