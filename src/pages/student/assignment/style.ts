import { typography } from "@/styles/typography";
import { AssignmentLabelProps } from "@/types/assignment/assignment";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background.secondary};
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  flex: 1;
  padding: 2rem 3rem;
  overflow-y: auto;
`;

export const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PageTitle = styled.span`
  ${typography.heading1}
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ChapterList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors.background.secondary};
`;

export const ChapterWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease-in-out;
`;

export const ChapterItem = styled.div`
  padding: 1.5rem;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
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
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
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

export const AssignmentList = styled.div`
  overflow: hidden;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
`;

export const AssignmentWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-radius: 4px;
  overflow: hidden;
`;

export const AssignmentItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1.25rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.secondary};
  }
`;

export const AssignmentLabel = styled.span<AssignmentLabelProps>`
  ${typography.subHeading2}
  font-size: 0.875rem;
  color: ${({ label, theme }) =>
    label === "할당됨"
      ? theme.colors.primary.green
      : label === "제출됨"
      ? theme.colors.primary.blue
      : label === "누락됨"
      ? theme.colors.primary.red
      : "black"};
  margin-right: 0.75rem;
  min-width: 60px;
  font-weight: 600;
`;

export const AssignmentTitle = styled.span`
  ${typography.subHeading2}
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text.primary};
  flex: 1;
`;

export const AssignmentMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const AssignmentDate = styled.span`
  ${typography.body2}
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.875rem;
`;

export const ChevronIcon = styled.span<{ $isOpen: boolean }>`
  ${typography.body2}
  color: ${({ theme }) => theme.colors.text.secondary};
  transition: transform 0.4s ease-in-out;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  font-size: 0.875rem;
`;

export const AssignmentContent = styled.div<{ $isOpen: boolean }>`
  padding: ${({ $isOpen }) => ($isOpen ? "1.25rem" : "0 1.25rem")};
  max-height: ${({ $isOpen }) => ($isOpen ? "1000px" : "0")};
  overflow: hidden;
  color: ${({ theme }) => theme.colors.text.primary};
  ${typography.body1}
  line-height: 1.6;
  white-space: pre-wrap;
  transition: max-height 0.3s ease, padding 0.3s ease;
  background-color: ${({ theme }) => theme.colors.background.primary};
`;
