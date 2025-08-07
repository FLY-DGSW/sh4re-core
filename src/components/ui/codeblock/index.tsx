import styled, { css } from "styled-components";
import type { CodeType } from "@/types/code/code";
import { useCodeHighlighter } from "@/hooks/code/useCodeHighlighter";

interface CodeBlockProps {
  code: string;
  language: CodeType["language"];
  $isFullScreen?: boolean;
  fontSize?: number;
  noPadding?: boolean;
}

const CodeBlock = ({
  code,
  language,
  $isFullScreen = false,
  fontSize = 1,
  noPadding = false,
}: CodeBlockProps) => {
  const { highlightedCode, isLoading } = useCodeHighlighter(code, language);

  const commonProps = {
    $isFullScreen,
    fontSize,
    $noPadding: noPadding,
  };

  if (isLoading) {
    return <LoadingContainer {...commonProps}>Loading...</LoadingContainer>;
  }

  return (
    <CodeWrapper
      {...commonProps}
      dangerouslySetInnerHTML={{ __html: highlightedCode }}
    />
  );
};

export default CodeBlock;

const fullScreenStyles = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  padding: 2rem;
  margin: 0;
  border-radius: 0;
  overflow-y: auto;
  background-color: #24292e;
`;

const BaseContainer = styled.div<{
  $isFullScreen: boolean;
  fontSize: number;
  $noPadding: boolean;
}>`
  height: 100%;
  overflow: auto;
  background-color: #24292e;
  padding: ${({ $noPadding }) => ($noPadding ? "0" : "1.2rem")};
  border-radius: 4px;
  font-size: ${({ fontSize }) => `${fontSize}rem`};
  transition: font-size 0.2s ease-in-out;

  ${({ $isFullScreen }) => $isFullScreen && fullScreenStyles}
`;

const CodeWrapper = styled(BaseContainer)``;

const LoadingContainer = styled(BaseContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #abb2bf;
`;
