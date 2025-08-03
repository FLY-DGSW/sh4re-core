import { typography } from "@/styles/typography";
import { AnnouncementLabelProps } from "@/types/announcement/announcement";
import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background.primary};
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 1.25rem 1.5rem;
  cursor: pointer;
`;

export const Label = styled.span<AnnouncementLabelProps>`
  ${typography.subHeading2}
  font-size: 1rem;
  color: ${({ label, theme }) =>
    label === "과제"
      ? theme.colors.primary.orange
      : label === "공지"
      ? theme.colors.primary.red
      : "black"};
  margin-right: 0.5rem;
  min-width: 40px;
  font-weight: 600;
`;

export const Title = styled.span`
  ${typography.subHeading2}
  font-size: 1rem;
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
`;

export const ChevronIcon = styled.span<{ $isOpen: boolean }>`
  ${typography.body2}
  color: ${({ theme }) => theme.colors.text.secondary};
  transition: transform 0.3s ease;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

export const Content = styled.div<{ $isOpen: boolean }>`
  padding: ${({ $isOpen }) => ($isOpen ? "1.5rem" : "0 1.5rem")};
  max-height: ${({ $isOpen }) => ($isOpen ? "1000px" : "0")};
  overflow: hidden;
  color: ${({ theme }) => theme.colors.text.primary};
  ${typography.body1}
  line-height: 1.6;
  white-space: pre-wrap;
  transition: max-height 0.3s ease, padding 0.3s ease,
    visibility 0.3s ease-in-out, opacity 0.3s ease-in-out;
`;
