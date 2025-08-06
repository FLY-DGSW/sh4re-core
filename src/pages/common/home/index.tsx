import * as S from "./style";
import { chapters as assignmentData } from "@/constants/assignmentData";
import { announcements } from "@/constants/announcementsData";
import { handouts } from "@/constants/handoutData";
import AssignmentIcon from "@/assets/sidebar/assignment.svg";
import AnnouncementsIcon from "@/assets/sidebar/announcements.svg";
import HandoutsIcon from "@/assets/sidebar/handouts.svg";
import { IoMdArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const assignedAssignments = assignmentData
    .flatMap((chapter) => chapter.assignments)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <S.Container>
      <S.Layout>
        <S.LeftColumn>
          <S.Box>
            <S.Header>
              <S.Title>
                <AssignmentIcon />
                과제
              </S.Title>
              <S.MoreLink onClick={() => navigate("/assignments")}>
                전체보기 <IoMdArrowForward />
              </S.MoreLink>
            </S.Header>
            <S.List>
              {assignedAssignments.map((item) => (
                <S.StyledAssignmentItem
                  key={item.id}
                  assignment={item}
                  onClick={() => navigate(`/assignments/${item.id}`)}
                />
              ))}
            </S.List>
          </S.Box>
        </S.LeftColumn>
        <S.RightColumn>
          <S.AnnouncementsBox>
            <S.Header>
              <S.Title>
                <AnnouncementsIcon />
                공지사항
              </S.Title>
              <S.MoreLink onClick={() => navigate("/announcements")}>
                전체보기 <IoMdArrowForward />
              </S.MoreLink>
            </S.Header>
            <S.NonScrollableList>
              {announcements.slice(0, 3).map((item) => (
                <S.StyledAnnouncementsItem
                  key={item.id}
                  announcement={item}
                  onClick={() => navigate(`/announcements/${item.id}`)}
                />
              ))}
            </S.NonScrollableList>
          </S.AnnouncementsBox>
          <S.HandoutsBox>
            <S.Header>
              <S.Title>
                <HandoutsIcon />
                수업 자료
              </S.Title>
              <S.MoreLink onClick={() => navigate("/handouts")}>
                전체보기 <IoMdArrowForward />
              </S.MoreLink>
            </S.Header>
            <S.List>
              {handouts.map((item) => (
                <S.StyledHandoutItem key={item.id} handout={item} />
              ))}
            </S.List>
          </S.HandoutsBox>
        </S.RightColumn>
      </S.Layout>
    </S.Container>
  );
};

export default HomePage;
