import { typography } from "@/styles/typography";
import styled from "styled-components";
import { AnnouncementItem } from "../student/announcement/style";
import { HandoutItem } from "../student/handouts/style";
import { AssignmentLabel } from "../student/assignment/style";

export const Container = styled.div`
  padding: 2rem 3rem;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const PageLayout = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-grow: 1;
  overflow: hidden;
`;

export const LeftColumn = styled.div`
  display: flex;
  width: 50%;
`;

export const RightColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1.5rem 1.5rem 0.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
`;

export const AnnouncementSection = styled(Section)`
  flex-shrink: 0;
`;

export const HandoutSection = styled(Section)`
  flex-grow: 1;
`;

export const HomeAnnouncementItem = styled(AnnouncementItem)`
  padding: 0.75rem 0.25rem;
`;

export const HomeHandoutItem = styled(HandoutItem)`
  padding: 0.75rem 0.25rem;
`;

export const HomeAssignmentItem = styled.div`
  display: flex;
  padding: 0.75rem 0.25rem;
  align-items: center;
  cursor: pointer;
`;

export const HomeAssignmentLabel = styled(AssignmentLabel)`
  margin-right: 0;
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const SectionTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  ${typography.heading3}
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const SeeAllLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  ${typography.body2}
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.placeholder};
  text-decoration: none;
  cursor: pointer;
`;

export const ItemList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
`;

export const NonScrollableItemList = styled(ItemList)`
  overflow-y: hidden;
`;

export const ItemTitle = styled.span`
  ${typography.body1}
  color: ${({ theme }) => theme.colors.text.primary};
  flex: 1;
`;

export const ItemDate = styled.span`
  ${typography.body2}
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const StatusBadge = styled.span<{ label: string }>`
  ${typography.caption}
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  color: white;
  background-color: ${({ label, theme }) =>
    label === "할당됨"
      ? theme.colors.primary.green
      : label === "제출됨"
      ? theme.colors.primary.blue
      : label === "누락됨"
      ? theme.colors.primary.red
      : "black"};
`;
