import styled from "styled-components";
import { typography } from "@/styles/typography";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 1.5rem;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.background.primary};
  padding-bottom: 1rem;
`;

export const Title = styled.h1`
  ${typography.heading2}
  margin-bottom: 0.5rem;
`;

export const Author = styled.p`
  ${typography.body1}
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const Description = styled.p`
  ${typography.body1}
  line-height: 1.6;
  flex-grow: 1;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 14rem;
  background-color: ${({ theme }) => theme.colors.primary.blue};
  color: white;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  ${typography.body1}
  &:hover {
    opacity: 0.9;
  }
`;

export const LikeBox = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
  gap: 0.1rem;
  span {
    margin-top: 0.3rem;
  }
`;

export const LikeButton = styled.button<{ $isLiked: boolean }>`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  svg {
    width: 2rem;
    height: 2rem;
    color: ${({ $isLiked, theme }) =>
      $isLiked ? theme.colors.primary.red : theme.colors.text.secondary};
  }
`;

export const Meta = styled.div`
  ${typography.caption}
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-self: flex-start;
`;

export const MetaItem = styled.span``;

export const Info = styled.div`
  ${typography.body1}
  color: ${({ theme }) => theme.colors.text.primary};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.background.primary};
  flex-grow: 1;
`;
