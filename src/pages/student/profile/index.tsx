import * as S from "./style";
import { useProfilePage } from "@/hooks/profile/useProfilePage";
import CodeBlock from "@/components/ui/CodeBlock";
import ProgressBar from "@/components/ui/ProgressBar";
import Heart from "@/assets/profile/heart.svg";
import Code from "@/assets/profile/code.svg";
import SchoolIcon from "@/assets/profile/school.svg";
import EmailIcon from "@/assets/profile/email.svg";

const ProfilePage = () => {
  const { user, myCodes, totalLikes, isLoading, error, handleCodeClick } =
    useProfilePage();

  if (isLoading) {
    return (
      <S.Container>
        <div>로딩 중...</div>
      </S.Container>
    );
  }

  if (error) {
    return (
      <S.Container>
        <div>데이터를 불러오는 중 오류가 발생했습니다.</div>
      </S.Container>
    );
  }

  if (!user) {
    return (
      <S.Container>
        <div>사용자 정보를 불러올 수 없습니다.</div>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.ProfileHeader>
        <S.TopSection>
          <S.UserInfoSection>
            <S.UserInfoRow>
              <S.ProfileImage
                src='https://via.placeholder.com/150'
                alt='Profile'
              />
              <S.UserInfoText>
                <S.UserInfo>
                  <S.UserName>{user.name}</S.UserName>
                  <S.UserDetailSecondary>
                    @{user.username || user.name}
                  </S.UserDetailSecondary>
                </S.UserInfo>
                <S.UserDetail>
                  <SchoolIcon />
                  대구소프트웨어마이스터고등학교 {user.grade}학년{" "}
                  {user.classNumber}반 {user.studentNumber}번
                </S.UserDetail>
                <S.UserDetail style={{ marginLeft: "0.1rem" }}>
                  <EmailIcon />
                  {user.email}
                </S.UserDetail>
              </S.UserInfoText>
            </S.UserInfoRow>
          </S.UserInfoSection>

          <S.StatsSection>
            <S.StatCard>
              <S.MyStatBox>
                <Heart />
                <S.StatLabel>받은 하트 수</S.StatLabel>
              </S.MyStatBox>
              <S.StatValue>{totalLikes}개</S.StatValue>
            </S.StatCard>
            <S.StatCard>
              <S.MyStatBox>
                <Code />
                <S.StatLabel>올린 코드 수</S.StatLabel>
              </S.MyStatBox>
              <S.StatValue>{myCodes.length}개</S.StatValue>
            </S.StatCard>
          </S.StatsSection>
        </S.TopSection>

        <S.AssignmentProgressSection>
          <S.StatRow>
            <S.StatItem>
              <S.StatBox>
                <S.StatLabel>과제 수행률</S.StatLabel>
                <S.StatValue>76.5%</S.StatValue>
              </S.StatBox>
              <ProgressBar progress={76.5} />
            </S.StatItem>
          </S.StatRow>
        </S.AssignmentProgressSection>
      </S.ProfileHeader>
      <S.CodeSection>
        <S.SectionTitle>내가 작성한 코드</S.SectionTitle>
        <S.CodeGrid>
          {myCodes.map((code) => (
            <S.CodeContainer
              key={code.id}
              onClick={() => handleCodeClick(code.id)}
            >
              <S.CodeBox>
                <CodeBlock
                  noPadding
                  code={code.code}
                  language={code.language}
                />
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
