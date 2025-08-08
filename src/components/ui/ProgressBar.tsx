import React from "react";
import styled from "styled-components";

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 10px;
  background-color: ${({ theme }) => theme.colors.background.selected};
  border-radius: 5px;
  overflow: hidden;
`;

const ProgressBarFill = styled.div<{ $progress: number }>`
  height: 100%;
  width: ${({ $progress }) => $progress}%;
  background-color: ${({ theme }) => theme.colors.primary.blue};
  border-radius: 5px;
  transition: width 0.5s ease-in-out;
`;

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <ProgressBarContainer>
      <ProgressBarFill $progress={progress} />
    </ProgressBarContainer>
  );
};

export default ProgressBar;