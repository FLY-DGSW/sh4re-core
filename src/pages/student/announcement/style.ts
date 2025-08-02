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

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.text.primary};
  ${typography.body1}

  input[type="checkbox"] {
    cursor: pointer;
  }

  label {
    cursor: pointer;
    white-space: nowrap;
  }
`;

export const AnnouncementList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  background-color: ${({ theme }) => theme.colors.background.secondary};
`;

export const AnnouncementWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background.primary};
`;

export const AnnouncementItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1.25rem 1.5rem;
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

export const ChevronIcon = styled.span<{ $isOpen: boolean }>`
  ${typography.body2}
  color: ${({ theme }) => theme.colors.text.secondary};
  transition: transform 0.3s ease;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

export const AnnouncementContent = styled.div<{ $isOpen: boolean }>`
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
