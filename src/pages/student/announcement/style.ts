import { typography } from "@/styles/typography";
import { AnnouncementLabelProps } from "@/types/announcement/announcement";
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

export const PageTitle = styled.span`
  ${typography.heading1}
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const AnnouncementList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  background-color: ${({ theme }) => theme.colors.background.secondary};
`;

export const AnnouncementItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1.25rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.background.primary};
  cursor: pointer;
`;

export const AnnouncementLabel = styled.span<AnnouncementLabelProps>`
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

export const AnnouncementTitle = styled.span`
  ${typography.subHeading2}
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text.primary};
  flex: 1;
`;

export const AnnouncementMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const AnnouncementDate = styled.span`
  ${typography.body2}
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const ChevronIcon = styled.span`
  ${typography.body2}
  color: ${({ theme }) => theme.colors.text.secondary};
`;
