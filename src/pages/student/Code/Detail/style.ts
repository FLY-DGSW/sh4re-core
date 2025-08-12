import styled from "styled-components";
import { typography } from "@/styles/typography";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 3rem;
  gap: 2rem;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  min-height: 100vh;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;

  @media (max-width: 1440px) {
    padding: 2rem 2rem;
  }

  @media (max-width: 1024px) {
    padding: 1.5rem 1.5rem;
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 1rem;
    gap: 1.25rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 0.75rem;
    gap: 1rem;
  }
`;

export const MainContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  min-height: 70vh;
  width: 100%;
  max-width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    gap: 1.5rem;
    min-height: auto;
  }

  @media (max-width: 768px) {
    gap: 1.25rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

export const CodeContainer = styled.div`
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  height: 100%;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    height: 60vh;
    min-height: 400px;
  }

  @media (max-width: 768px) {
    height: 50vh;
    min-height: 350px;
    border-radius: 8px;
  }

  @media (max-width: 480px) {
    height: 40vh;
    min-height: 300px;
    border-radius: 12px;
  }
`;

export const FullScreenCodeContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #282c34;
  z-index: 9999;
  display: flex;
  flex-direction: column;

  .simplebar-content {
    height: 100%;
  }
`;

export const FontControlButton = styled.button`
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 44px;
  min-height: 44px;
  justify-content: center;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 768px) {
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    &:active {
      background-color: rgba(255, 255, 255, 0.3);
    }
  }

  @media (max-width: 480px) {
    min-width: 40px;
    min-height: 40px;
    padding: 0.375rem;
    border-radius: 8px;
  }
`;

export const FontControlWrapper = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  z-index: 10;
  display: flex;
  gap: 0.5rem;

  @media (max-width: 768px) {
    bottom: 0.75rem;
    right: 0.75rem;
    gap: 0.375rem;
  }

  @media (max-width: 480px) {
    bottom: 0.5rem;
    right: 0.5rem;
    flex-direction: column;
    gap: 0.25rem;
  }
`;

export const DetailsContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-radius: 4px;
  padding: 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    height: auto;
    min-height: 200px;
    padding: 1.25rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    border-radius: 8px;
    min-height: 150px;
  }

  @media (max-width: 480px) {
    padding: 0.875rem;
    border-radius: 12px;
    min-height: 120px;
  }
`;

export const CommentsContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-radius: 4px;
  padding: 1.5rem;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1.25rem;
    border-radius: 8px;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    border-radius: 12px;
  }
`;

export const CodeDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 1.5rem;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const CodeDetailsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.background.primary};
  padding-bottom: 1rem;
`;

export const CodeDetailsTitle = styled.h1`
  ${typography.heading2}
  margin-bottom: 0.5rem;
`;

export const CodeDetailsAuthor = styled.p`
  ${typography.body1}
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const CodeDetailsActions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const CodeDetailsActionButton = styled.button`
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
    margin-top: 0.1rem;
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

export const CodeDetailsMeta = styled.div`
  ${typography.caption}
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-self: flex-start;
`;

export const CodeDetailsMetaItem = styled.span``;

export const CodeDetailsInfo = styled.div`
  ${typography.body1}
  color: ${({ theme }) => theme.colors.text.primary};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.background.primary};
  flex-grow: 1;
`;
