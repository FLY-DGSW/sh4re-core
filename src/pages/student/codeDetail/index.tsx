import { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import {
  FiMaximize,
  FiMinimize,
  FiZoomIn,
  FiZoomOut,
  FiEdit,
  FiTrash2,
} from "react-icons/fi";
import CodeBlock from "@/components/ui/CodeBlock";
import CodeDetails from "@/components/common/codeDetails";
import Comments from "@/components/common/comments";
import BackButton from "@/components/ui/BackButton";
import { useCode } from "@/hooks/code/useCode";
import { useDeleteCode } from "@/hooks/code/useDeleteCode";
import { useToggleCodeLike } from "@/hooks/code/useToggleCodeLike";
import { useUser } from "@/hooks/auth/login/useUser";
import * as S from "./style";

const CodeDetailPage = () => {
  const { codeId } = useParams<{ codeId: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [fontSize, setFontSize] = useState(1);

  const { data: user } = useUser();
  const { data: codeData, isLoading, error } = useCode(Number(codeId));
  const deleteCodeMutation = useDeleteCode();
  const toggleLikeMutation = useToggleCodeLike();

  const commentsData = [
    {
      id: "c1",
      author: "권대형",
      content: "와 어떻게 이런 코드를 작성하셨나요? 정말 대단합니다!",
    },
    {
      id: "c2",
      author: "이민수",
      content: "이렇게도 풀 수 있군요. 좋은 참고가 되었습니다.",
    },
  ];

  const isOwner = user && codeData && user.name === codeData.student;

  const handleEdit = () => {
    navigate(`/code/${codeId}/edit`);
  };

  const handleDelete = async () => {
    if (window.confirm("정말로 이 코드를 삭제하시겠습니까?")) {
      try {
        await deleteCodeMutation.mutateAsync(Number(codeId));
        navigate("/code");
      } catch (error) {
        console.error("Failed to delete code:", error);
        alert("코드 삭제에 실패했습니다.");
      }
    }
  };

  const handleToggleLike = async () => {
    try {
      await toggleLikeMutation.mutateAsync(Number(codeId));
    } catch (error) {
      console.error("Failed to toggle like:", error);
    }
  };

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error || !codeData) {
    return <div>코드를 찾을 수 없습니다.</div>;
  }

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
    setFontSize(isFullScreen ? 1 : 2);
  };

  const increaseFontSize = () => setFontSize((size) => Math.min(size + 0.3, 3));
  const decreaseFontSize = () =>
    setFontSize((size) => Math.max(size - 0.3, 0.5));

  const handleGoBack = () => {
    if (location.state?.fromProfile) {
      navigate("/profile");
    } else {
      navigate("/code");
    }
  };

  return (
    <S.PageContainer>
      {isFullScreen ? (
        <S.FullScreenCodeContainer>
          <CodeBlock
            code={codeData.code}
            language={codeData.language}
            $isFullScreen={true}
            fontSize={fontSize}
          />
          <S.FontControlWrapper style={{ zIndex: 10000 }}>
            <S.FontControlButton onClick={decreaseFontSize}>
              <FiZoomOut />
            </S.FontControlButton>
            <S.FontControlButton onClick={increaseFontSize}>
              <FiZoomIn />
            </S.FontControlButton>
            <S.FontControlButton onClick={toggleFullScreen}>
              <FiMinimize />
            </S.FontControlButton>
          </S.FontControlWrapper>
        </S.FullScreenCodeContainer>
      ) : (
        <>
          <BackButton onClick={handleGoBack}>
            {location.state?.fromProfile
              ? "프로필로 돌아가기"
              : "코드 전체보기"}
          </BackButton>
          <S.MainContent>
            <S.CodeContainer>
              <CodeBlock
                code={codeData.code}
                language={codeData.language}
                fontSize={fontSize}
              />
              <S.FontControlWrapper>
                <S.FontControlButton onClick={decreaseFontSize}>
                  <FiZoomOut />
                </S.FontControlButton>
                <S.FontControlButton onClick={increaseFontSize}>
                  <FiZoomIn />
                </S.FontControlButton>
                <S.FontControlButton onClick={toggleFullScreen}>
                  <FiMaximize />
                </S.FontControlButton>
                {isOwner && (
                  <>
                    <S.FontControlButton onClick={handleEdit}>
                      <FiEdit />
                    </S.FontControlButton>
                    <S.FontControlButton
                      onClick={handleDelete}
                      disabled={deleteCodeMutation.isPending}
                    >
                      <FiTrash2 />
                    </S.FontControlButton>
                  </>
                )}
              </S.FontControlWrapper>
            </S.CodeContainer>
            <S.DetailsContainer>
              <CodeDetails
                data={codeData}
                onToggleLike={handleToggleLike}
                isToggling={toggleLikeMutation.isPending}
              />
            </S.DetailsContainer>
          </S.MainContent>
          <S.CommentsContainer>
            <Comments comments={commentsData} />
          </S.CommentsContainer>
        </>
      )}
    </S.PageContainer>
  );
};

export default CodeDetailPage;
