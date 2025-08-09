import { typography } from "@/styles/typography";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  max-width: 100%;
  padding: 2rem 3rem;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  overflow-x: hidden;
  overflow-y: auto;
  box-sizing: border-box;

  @media (max-width: 1440px) {
    padding: 2rem 2rem;
  }

  @media (max-width: 1024px) {
    padding: 1.5rem 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 0.75rem;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  flex: 1;
  width: 100%;
  max-width: 100%;
  overflow-y: auto;

  @media (max-width: 768px) {
    gap: 1rem;
  }

  @media (max-width: 480px) {
    gap: 0.875rem;
  }
`;

export const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 100%;
  gap: 1rem;
  padding: 3px 0;
  margin: -3px 0;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }

  @media (max-width: 768px) {
    gap: 0.875rem;
  }

  @media (max-width: 480px) {
    gap: 0.75rem;
  }
`;

export const PageTitle = styled.span`
  ${typography.heading1}
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;

  @media (max-width: 1024px) {
    order: 1;
    text-align: left;
  }

  @media (max-width: 768px) {
    font-size: 1.375rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;

  @media (max-width: 1024px) {
    order: 2;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  @media (max-width: 768px) {
    gap: 0.75rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0.5rem;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  color: ${({ theme }) => theme.colors.text.primary};
  ${typography.body1}
  white-space: nowrap;

  input[type="checkbox"] {
    cursor: pointer;
  }

  label {
    cursor: pointer;
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
    justify-content: flex-start;
  }
`;

export const ChapterList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors.background.secondary};
`;

export const ChapterWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-radius: 4px;
  overflow: hidden;
  transition: box-shadow 0.3s ease-in-out;
`;

export const ChapterItem = styled.div`
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.background.primary};
  transition: background-color 0.2s ease-in-out;
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

export const ChapterContent = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  background-color: ${({ theme }) => theme.colors.background.secondary};
`;

export const AssignmentList = styled.div`
  overflow: hidden;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
`;
