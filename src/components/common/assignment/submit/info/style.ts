import { typography } from "@/styles/typography";
import { AssignmentLabelProps } from "@/types/assignment/assignment";
import styled from "styled-components";

export const AssignmentInfo = styled.div`
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-radius: 4px;
  overflow-y: auto;
  height: 100%;
  width: 100%;
  padding: 2rem;
`;

export const AssignmentHeader = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
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
`;

export const AssignmentTitle = styled.h1`
  ${typography.heading3}
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 0.5rem 0;
`;

export const AssignmentMeta = styled.p`
  ${typography.body2}
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0;
`;

export const AssignmentContent = styled.div`
  ${typography.body1}
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: 1.8;
  white-space: pre-wrap;
`;
