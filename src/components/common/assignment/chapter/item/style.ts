import { typography } from "@/styles/typography";
import styled from "styled-components";

export const ChapterWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-radius: 4px;
  overflow: hidden;
  transition: box-shadow 0.3s ease-in-out;
`;

export const ChapterItem = styled.div`
  padding: 1.5rem;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.background.primary};
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.light};
  }
`;

export const ChapterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
`;

export const ChapterTitleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
`;

export const ChapterTitle = styled.h3`
  ${typography.subHeading2}
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`;

export const ProgressSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const ProgressBar = styled.div`
  width: 200px;
  height: 8px;
  background-color: ${({ theme }) => theme.colors.background.selected};
  border-radius: 4px;
  overflow: hidden;
`;

export const ProgressFill = styled.div<{ $percentage: number }>`
  width: ${({ $percentage }) => $percentage}%;
  height: 100%;
  background: ${({ theme }) => theme.colors.primary.blue};
  transition: width 0.3s ease;
  border-radius: 3px;
`;

export const ProgressText = styled.span`
  ${typography.body2}
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.875rem;
  font-weight: 500;
  min-width: 80px;
`;

export const ChapterDescription = styled.p`
  ${typography.body1}
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0;
`;

export const ChapterMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 0.25rem;
`;

export const AssignmentCount = styled.span`
  ${typography.body2}
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.875rem;
`;

export const ChapterContent = styled.div<{ $isOpen: boolean }>`
  display: grid;
  grid-template-rows: ${({ $isOpen }) => ($isOpen ? "1fr" : "0fr")};
  transition: grid-template-rows 0.3s ease-in-out;
  background-color: ${({ theme }) => theme.colors.background.secondary};
`;

export const ChevronIcon = styled.span<{ $isOpen: boolean }>`
  ${typography.body2}
  color: ${({ theme }) => theme.colors.text.secondary};
  transition: transform 0.4s ease-in-out;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  font-size: 0.875rem;
`;
