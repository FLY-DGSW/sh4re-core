import { typography } from "@/styles/typography";
import { AssignmentLabelProps } from "@/types/assignment/assignment";
import styled from "styled-components";

export const AssignmentWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-radius: 4px;
  overflow: hidden;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1.25rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.secondary};
  }
`;

export const Label = styled.span<AssignmentLabelProps>`
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

export const Title = styled.span`
  ${typography.subHeading2}
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text.primary};
  flex: 1;
`;

export const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Date = styled.span`
  ${typography.body2}
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.875rem;
`;

export const Content = styled.div<{ $isOpen: boolean }>`
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

export const ItemDiv = Item;
