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
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    height: 100vh;
    overflow: hidden;
  }

  @media (max-width: 1023px) {
    min-height: 100vh;
  }

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

export const Layout = styled.div`
  display: grid;
  gap: 1.5rem;
  flex-grow: 1;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "assignments announcements";
    min-height: 0;
  }

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    gap: 1.25rem;
  }

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const LeftColumn = styled.div`
  display: flex;

  @media (min-width: 1024px) {
    grid-area: assignments;
    height: 100%;
  }

  @media (max-width: 1023px) {
    grid-row: 1;
  }
`;

export const RightColumn = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    grid-area: announcements;
    height: 100%;
    min-height: 0;
  }

  @media (max-width: 1023px) {
    display: contents;
  }
`;

export const Box = styled.section`
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-radius: 4px;
  padding: 1.5rem 1.5rem 0.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  min-height: 0;

  @media (max-width: 1024px) {
    padding: 1.25rem 1.25rem 0.5rem 1.25rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 1rem 0.5rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.875rem 0.875rem 0.5rem 0.875rem;
    border-radius: 8px;
  }
`;

export const AnnouncementsBox = styled(Box)`
  flex-shrink: 0;

  @media (min-width: 1024px) {
    height: 230px;
  }

  @media (max-width: 1023px) {
    grid-row: 2;
  }
`;

export const HandoutsBox = styled(Box)`
  @media (min-width: 1024px) {
    flex-grow: 1;
    min-height: 0;
    overflow: hidden;
  }

  @media (max-width: 1023px) {
    grid-row: 3;
  }
`;

export const StyledAnnouncementsItem = styled(AnnouncementsItem)`
  cursor: pointer;

  ${AnnouncementItemDiv} {
    padding: 0.75rem 0.25rem;

    @media (max-width: 768px) {
      padding: 0.625rem 0.125rem;
    }

    &:hover {
      background-color: transparent;
    }

    @media (max-width: 768px) {
      &:active {
        background-color: ${({ theme }) => theme.colors.background.selected};
      }
    }
  }

  ${ChevronIcon} {
    display: none;
  }
`;

export const StyledHandoutItem = styled(HandoutsItem)`
  ${HandoutItemDiv} {
    padding: 0.75rem 0.25rem;

    @media (max-width: 768px) {
      padding: 0.625rem 0.125rem;
    }

    &:hover {
      background-color: transparent;
    }

    @media (max-width: 768px) {
      &:active {
        background-color: ${({ theme }) => theme.colors.background.selected};
      }
    }
  }
`;

export const StyledAssignmentItem = styled(AssignmentItem)`
  cursor: pointer;

  ${AssignmentItemDiv} {
    padding: 0.75rem 0.25rem;

    @media (max-width: 768px) {
      padding: 0.625rem 0.125rem;
    }

    &:hover {
      background-color: transparent;
    }

    @media (max-width: 768px) {
      &:active {
        background-color: ${({ theme }) => theme.colors.background.selected};
      }
    }

    ${AssignmentLabel} {
      margin-right: 0;

      @media (max-width: 480px) {
        font-size: 0.7rem;
        padding: 0.15rem 0.4rem;
      }
    }
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    margin-bottom: 1.25rem;
    gap: 0.5rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 1rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  ${typography.heading3}
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;

  @media (min-width: 1024px) {
    font-size: 1.25rem;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 1.1rem;
    gap: 0.5rem;
  }

  @media (max-width: 767px) {
    font-size: 1rem;
    gap: 0.5rem;
  }

  svg {
    @media (max-width: 768px) {
      width: 1rem;
      height: 1rem;
    }
  }
`;

export const MoreLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  ${typography.body2}
  color: ${({ theme }) => theme.colors.placeholder};
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;

  @media (min-width: 768px) {
    font-size: 0.875rem;
  }

  @media (max-width: 767px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    align-self: flex-end;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
  flex-grow: 1;
  min-height: 0;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background.light};
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.text.secondary};
    border-radius: 3px;
    opacity: 0.5;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.text.primary};
  }

  @media (max-width: 768px) {
    gap: 0.75rem;
  }

  @media (max-width: 480px) {
    gap: 0.625rem;
  }
`;

export const NonScrollableList = styled(List)`
  flex-grow: 1;
  overflow-y: auto;
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
