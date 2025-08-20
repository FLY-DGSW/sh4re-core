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
import BackButton from "@/components/ui/BackButton";
import { useCode } from "@/hooks/code/useCode";
import { useCodeViewer } from "@/hooks/code/useCodeViewer";
import { useDeleteCode } from "@/hooks/code/useDeleteCode";
import { useToggleCodeLike } from "@/hooks/code/useToggleCodeLike";
import { useUser } from "@/hooks/auth/login/useUser";
import * as S from "./style";
import Comments from "@/components/common/Comments";
import { FiCopy } from "react-icons/fi";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { toast } from "react-toastify";

const CodeDetailPage = () => {
  const { codeId } = useParams<{ codeId: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const { data: user } = useUser();
  const { data: codeData, isLoading, error } = useCode(Number(codeId));
  const {
    isFullScreen,
    fontSize,
    increaseFontSize,
    decreaseFontSize,
    toggleFullScreen,
  } = useCodeViewer();
  const deleteCodeMutation = useDeleteCode();
  const toggleLikeMutation = useToggleCodeLike();

  const isOwner = user && codeData && user.name === codeData.authorName;

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

  const handleCopyCode = () => {
    if (codeData) {
      navigator.clipboard.writeText(codeData.code).then(() => {
        toast.success("코드가 복사되었습니다!");
      });
    }
  };

  const handleLike = () => {
    if (!toggleLikeMutation.isPending) {
      handleToggleLike();
    }
  };

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error || !codeData) {
    return <div>코드를 찾을 수 없습니다.</div>;
  }

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
              <S.CodeDetailsContainer>
                <S.CodeDetailsHeader>
                  <div>
                    <S.CodeDetailsTitle>{codeData.title}</S.CodeDetailsTitle>
                    <S.CodeDetailsAuthor>
                      by {codeData.authorName}
                    </S.CodeDetailsAuthor>
                  </div>
                  <S.CodeDetailsMeta>
                    <S.CodeDetailsMetaItem>
                      생성일:{" "}
                      {new Date(codeData.createdAt).toLocaleDateString()}
                    </S.CodeDetailsMetaItem>
                    <S.CodeDetailsMetaItem>
                      수정일:{" "}
                      {new Date(codeData.updatedAt).toLocaleDateString()}
                    </S.CodeDetailsMetaItem>
                  </S.CodeDetailsMeta>
                </S.CodeDetailsHeader>
                <S.CodeDetailsInfo>
                  <S.CodeDetailsMetaItem>
                    {codeData.description}
                  </S.CodeDetailsMetaItem>
                </S.CodeDetailsInfo>
                <S.CodeDetailsActions>
                  <S.LikeBox>
                    <S.LikeButton
                      onClick={handleLike}
                      $isLiked={codeData.isLikedByUser}
                      disabled={toggleLikeMutation.isPending}
                    >
                      {codeData.isLikedByUser ? (
                        <IoHeart />
                      ) : (
                        <IoHeartOutline />
                      )}
                    </S.LikeButton>
                    <span>{codeData.likeCount}</span>
                  </S.LikeBox>
                  <S.CodeDetailsActionButton onClick={handleCopyCode}>
                    <FiCopy />
                    <span>코드 복사하기</span>
                  </S.CodeDetailsActionButton>
                </S.CodeDetailsActions>
              </S.CodeDetailsContainer>
            </S.DetailsContainer>
          </S.MainContent>
          <S.CommentsContainer>
            <Comments />
          </S.CommentsContainer>
        </>
      )}
    </S.PageContainer>
  );
};

export default CodeDetailPage;
