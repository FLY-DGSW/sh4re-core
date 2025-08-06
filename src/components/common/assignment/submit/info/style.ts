import { typography } from "@/styles/typography";
import { AssignmentLabelProps } from "@/types/assignment/assignment";
import styled from "styled-components";

export const AssignmentInfo = styled.div`
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-radius: 4px;
  overflow-y: auto;
  height: 100%;
  width: 50%;
  padding: 2rem;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 100%;
    flex: none;
    min-height: 400px;
    max-height: 450px;
    padding: 1.75rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 8px;
    min-height: 350px;
  }

  @media (max-width: 480px) {
    padding: 1.25rem;
    border-radius: 12px;
    min-height: 300px;
  }
`;

export const AssignmentHeader = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    padding-bottom: 1.25rem;
    margin-bottom: 1.25rem;
  }

  @media (max-width: 480px) {
    padding-bottom: 1rem;
    margin-bottom: 1rem;
  }
`;

export const StatusBadge = styled.span<AssignmentLabelProps>`
  display: inline-block;
  margin-bottom: 1rem;
  ${typography.body2}
  color: ${({ label, theme }) =>
    label === "할당됨"
      ? theme.colors.primary.green
      : label === "제출됨"
      ? theme.colors.primary.blue
      : label === "누락됨"
      ? theme.colors.primary.red
      : "black"};

  @media (max-width: 768px) {
    margin-bottom: 0.875rem;
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 0.75rem;
    font-size: 0.75rem;
  }
`;

export const AssignmentTitle = styled.h1`
  ${typography.heading3}
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 0.5rem 0;
  word-wrap: break-word;
  overflow-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin: 0 0 0.4375rem 0;
  }

  @media (max-width: 480px) {
    font-size: 1.125rem;
    margin: 0 0 0.375rem 0;
    line-height: 1.3;
  }
`;

export const AssignmentMeta = styled.p`
  ${typography.body2}
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

export const AssignmentContent = styled.div`
  ${typography.body1}
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: 1.8;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.6;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
    line-height: 1.5;
  }
`;
