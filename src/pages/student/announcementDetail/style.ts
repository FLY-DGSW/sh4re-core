import styled from "styled-components";
import { typography } from "@/styles/typography";
import { AnnouncementsLabelProps } from "@/types/announcements/announcements";

export const Container = styled.div`
  padding: 2rem 3rem;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  height: 100%;
  box-sizing: border-box;
`;

export const MainContent = styled.div`
  background-color: ${({ theme }) => theme.colors.background.primary};
  padding: 2rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  height: 100%;
`;

export const Header = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const Label = styled.span<AnnouncementsLabelProps>`
  ${typography.subHeading2}
  font-size: 1rem;
  color: ${({ label, theme }) =>
    label === "과제"
      ? theme.colors.primary.orange
      : label === "공지"
      ? theme.colors.primary.red
      : "black"};
  margin-right: 0.5rem;
  font-weight: 600;
`;

export const Title = styled.h1`
  ${typography.heading2}
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 1rem 0;
`;

export const Meta = styled.div`
  ${typography.body2}
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const Content = styled.div`
  ${typography.body1}
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: 1.8;
  white-space: pre-wrap;
  min-height: 300px;
`;
