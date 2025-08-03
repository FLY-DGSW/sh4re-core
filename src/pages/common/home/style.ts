import { typography } from "@/styles/typography";
import styled from "styled-components";
import AnnouncementsItem from "@/components/common/announcements/item";
import AssignmentItem from "@/components/common/assignment/item";
import HandoutsItem from "@/components/common/handouts/item";
import { Item as AnnouncementItemDiv } from "@/components/common/announcements/item/style";
import { HandoutItem as HandoutItemDiv } from "@/components/common/handouts/item/style";
import { AssignmentItem as AssignmentItemDiv } from "@/components/common/assignment/item/style";
import { ChevronIcon } from "@/components/common/announcements/item/style";
import { AssignmentLabel } from "@/components/common/assignment/item/style";

export const Container = styled.div`
  padding: 2rem 3rem;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const Layout = styled.div`
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

export const Box = styled.section`
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1.5rem 1.5rem 0.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
`;

export const AnnouncementsBox = styled(Box)`
  flex-shrink: 0;
`;

export const HandoutsBox = styled(Box)`
  flex-grow: 1;
`;

export const StyledAnnouncementsItem = styled(AnnouncementsItem)`
  cursor: pointer;

  ${AnnouncementItemDiv} {
    padding: 0.75rem 0.25rem;
    &:hover {
      background-color: transparent;
    }
  }

  ${ChevronIcon} {
    display: none;
  }
`;

export const StyledHandoutItem = styled(HandoutsItem)`
  ${HandoutItemDiv} {
    padding: 0.75rem 0.25rem;
    &:hover {
      background-color: transparent;
    }
  }
`;

export const StyledAssignmentItem = styled(AssignmentItem)`
  cursor: pointer;

  ${AssignmentItemDiv} {
    padding: 0.75rem 0.25rem;
    &:hover {
      background-color: transparent;
    }
    ${AssignmentLabel} {
      margin-right: 0;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  ${typography.heading3}
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const MoreLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  ${typography.body2}
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.placeholder};
  text-decoration: none;
  cursor: pointer;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
`;

export const NonScrollableList = styled(List)`
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