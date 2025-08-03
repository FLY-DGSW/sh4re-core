import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FiMaximize, FiMinimize, FiZoomIn, FiZoomOut } from "react-icons/fi";
import CodeBlock from "@/components/ui/codeblock";
import CodeDetails from "@/components/common/CodeDetails";
import Comments from "@/components/common/Comments";
import BackButton from "@/components/ui/backButton";
import { codes } from "@/constants/codeData";
import * as S from "./style";

const CodeDetailPage = () => {
  const { codeId } = useParams<{ codeId: string }>();
  const navigate = useNavigate();
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [fontSize, setFontSize] = useState(1);

  const codeData = codes.find((c) => c.id.toString() === codeId);

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

  if (!codeData) {
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
    navigate(-1);
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
          <BackButton onClick={handleGoBack}>코드 전체보기</BackButton>
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
              </S.FontControlWrapper>
            </S.CodeContainer>
            <S.DetailsContainer>
              <CodeDetails data={codeData} />
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
