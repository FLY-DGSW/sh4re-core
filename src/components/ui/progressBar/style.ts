import styled from "styled-components";

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 10px;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const ProgressBarFill = styled.div<{ progress: number }>`
  height: 100%;
  width: ${({ progress }) => progress}%;
  background-color: ${({ theme }) => theme.colors.primary.blue};
  border-radius: 5px;
  transition: width 0.5s ease-in-out;
`;
