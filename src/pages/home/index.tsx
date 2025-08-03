import * as S from "./style";
import { chapters as assignmentData } from "@/constants/assignmentData";
import { announcements } from "@/constants/announcementData";
import { handouts } from "@/constants/handoutData";
import {
  AnnouncementDate,
  AnnouncementLabel,
  AnnouncementMeta,
  AnnouncementTitle,
} from "@/pages/student/announcement/style";
import {
  AssignmentDate,
  AssignmentMeta,
  AssignmentTitle,
} from "@/pages/student/assignment/style";
import {
  HandoutDate,
  HandoutIcon,
  HandoutMeta,
  HandoutTitle,
} from "@/pages/student/handouts/style";
import { getIconByExtension } from "../student/handouts";
export { AnnouncementItem } from "@/pages/student/announcement/style";
export { AssignmentItem } from "@/pages/student/assignment/style";
export { HandoutItem } from "@/pages/student/handouts/style";
import AssignmentIcon from "@/assets/sidebar/assignment.svg?url";
import AnnouncementIcon from "@/assets/sidebar/announcement.svg?url";
import HandoutsIcon from "@/assets/sidebar/handouts.svg?url";
import { IoMdArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const assignedAssignments = assignmentData
    .flatMap((chapter) => chapter.assignments)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <S.Container>
      <S.PageLayout>
        <S.LeftColumn>
          <S.Section>
            <S.SectionHeader>
              <S.SectionTitle>
                <img src={AssignmentIcon} alt='과제 아이콘' />
                과제
              </S.SectionTitle>
              <S.SeeAllLink onClick={() => navigate("/assignments")}>
                전체보기 <IoMdArrowForward />
              </S.SeeAllLink>
            </S.SectionHeader>
            <S.ItemList>
              {assignedAssignments.map((item) => (
                <S.HomeAssignmentItem key={item.id}>
                  <S.HomeAssignmentLabel label={item.label}>
                    [{item.label}]
                  </S.HomeAssignmentLabel>
                  <AssignmentTitle>{item.title}</AssignmentTitle>
                  <AssignmentMeta>
                    <AssignmentDate>
                      {item.date} · {item.author}
                    </AssignmentDate>
                  </AssignmentMeta>
                </S.HomeAssignmentItem>
              ))}
            </S.ItemList>
          </S.Section>
        </S.LeftColumn>

        <S.RightColumn>
          <S.AnnouncementSection>
            <S.SectionHeader>
              <S.SectionTitle>
                <img src={AnnouncementIcon} alt='공지사항 아이콘' />
                공지사항
              </S.SectionTitle>
              <S.SeeAllLink onClick={() => navigate("/announcements")}>
                전체보기 <IoMdArrowForward />
              </S.SeeAllLink>
            </S.SectionHeader>
            <S.NonScrollableItemList>
              {announcements.slice(0, 3).map((item) => (
                <S.HomeAnnouncementItem key={item.id}>
                  <AnnouncementLabel label={item.label}>
                    [{item.label}]
                  </AnnouncementLabel>
                  <AnnouncementTitle>{item.title}</AnnouncementTitle>
                  <AnnouncementMeta>
                    <AnnouncementDate>
                      {item.date} · {item.author}
                    </AnnouncementDate>
                  </AnnouncementMeta>
                </S.HomeAnnouncementItem>
              ))}
            </S.NonScrollableItemList>
          </S.AnnouncementSection>

          <S.HandoutSection>
            <S.SectionHeader>
              <S.SectionTitle>
                <img src={HandoutsIcon} alt='수업 자료 아이콘' />
                수업 자료
              </S.SectionTitle>
              <S.SeeAllLink onClick={() => navigate("/handouts")}>
                전체보기 <IoMdArrowForward />
              </S.SeeAllLink>
            </S.SectionHeader>
            <S.ItemList>
              {handouts.map((item) => (
                <S.HomeHandoutItem key={item.id}>
                  <HandoutIcon src={getIconByExtension(item.extension)} />
                  <HandoutTitle>{item.title}</HandoutTitle>
                  <HandoutMeta>
                    <HandoutDate>
                      {item.date} · {item.author}
                    </HandoutDate>
                  </HandoutMeta>
                </S.HomeHandoutItem>
              ))}
            </S.ItemList>
          </S.HandoutSection>
        </S.RightColumn>
      </S.PageLayout>
    </S.Container>
  );
};

export default HomePage;
