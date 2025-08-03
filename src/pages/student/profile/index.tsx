import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { codes } from "@/constants/codeData";
import CodeBlock from "@/components/ui/codeblock";
import ProgressBar from "@/components/ui/progressBar";
import Heart from "@/assets/profile/heart.svg";
import Code from "@/assets/profile/code.svg";
import SchoolIcon from "@/assets/profile/school.svg";
import EmailIcon from "@/assets/profile/email.svg";

const ProfilePage = () => {
  const navigate = useNavigate();

  const user = {
    profileImage: "https://via.placeholder.com/150",
    name: "채근영",
    username: "chaeyn",
    school: "대구소프트웨어마이스터고등학교 1학년 2반 17번",
    email: "chaeyn@dgsw.hs.kr",
    assignmentCompletion: 76.5,
  };

  const myCodes = codes.filter((code) => code.student === user.username);

  const totalLikes = myCodes.reduce((sum, code) => sum + code.likes, 0);

  const handleCodeClick = (codeId: number) => {
    navigate(`/code/${codeId}`, { state: { fromProfile: true } });
  };

  return (
    <S.Container>
      <S.ProfileHeader>
        <S.UserInfoRow>
          <S.ProfileImage src={user.profileImage} alt='Profile' />
          <S.UserInfoText>
            <S.UserInfo>
              <S.UserName>{user.name}</S.UserName>
              <S.UserDetailSecondary>@{user.username}</S.UserDetailSecondary>
            </S.UserInfo>
            <S.UserDetail>
              <SchoolIcon />
              {user.school}
            </S.UserDetail>
            <S.UserDetail style={{ marginLeft: "0.1rem" }}>
              <EmailIcon />
              {user.email}
            </S.UserDetail>
          </S.UserInfoText>
        </S.UserInfoRow>
        <S.StatRow>
          <S.StatItem>
            <S.StatBox>
              <S.StatLabel>과제 수행률</S.StatLabel>
              <S.StatValue>{user.assignmentCompletion}%</S.StatValue>
            </S.StatBox>
            <ProgressBar progress={user.assignmentCompletion} />
          </S.StatItem>
        </S.StatRow>
        <S.MyStatusRow>
          <S.StatItem>
            <S.MyStatBox>
              <Heart />
              <S.StatLabel>받은 하트 수</S.StatLabel>
            </S.MyStatBox>
            <S.StatValue>{totalLikes}개</S.StatValue>
          </S.StatItem>
          <S.StatItem>
            <S.MyStatBox>
              <Code />
              <S.StatLabel>올린 코드 수</S.StatLabel>
            </S.MyStatBox>
            <S.StatValue>{myCodes.length}개</S.StatValue>
          </S.StatItem>
        </S.MyStatusRow>
      </S.ProfileHeader>
      <S.CodeSection>
        <S.SectionTitle>내가 작성한 코드</S.SectionTitle>
        <S.CodeGrid>
          {myCodes.map((code) => (
            <S.CodeContainer key={code.id} onClick={() => handleCodeClick(code.id)}>
              <S.CodeBox>
                <CodeBlock code={code.code} language={code.language} />
              </S.CodeBox>
              <S.CodeInfo>
                <S.CodeTitle>{code.title}</S.CodeTitle>
                <S.StudentInfo>{code.student}</S.StudentInfo>
              </S.CodeInfo>
            </S.CodeContainer>
          ))}
        </S.CodeGrid>
      </S.CodeSection>
    </S.Container>
  );
};

export default ProfilePage;
