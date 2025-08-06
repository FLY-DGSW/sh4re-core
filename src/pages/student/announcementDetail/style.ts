import styled from "styled-components";
import { typography } from "@/styles/typography";
import { AnnouncementsLabelProps } from "@/types/announcements/announcements";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  max-width: 100%;
  padding: 2rem 3rem;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  box-sizing: border-box;

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

export const MainContent = styled.div`
  background-color: ${({ theme }) => theme.colors.background.primary};
  padding: 2rem;
  border-radius: 4px;
  flex: 1;
  margin-top: 1rem;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 1.75rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin-top: 0.75rem;
    border-radius: 8px;
  }

  @media (max-width: 480px) {
    padding: 1.25rem;
    border-radius: 12px;
  }
`;

export const Header = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding-bottom: 1.25rem;
    margin-bottom: 1.25rem;
  }

  @media (max-width: 480px) {
    padding-bottom: 1rem;
    margin-bottom: 1rem;
  }
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
  display: inline-block;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-right: 0.375rem;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    margin-right: 0;
    display: block;
  }
`;

export const Title = styled.h1`
  ${typography.heading2}
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 1rem 0;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;

  @media (max-width: 1024px) {
    font-size: 1.375rem;
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin: 0.875rem 0;
  }

  @media (max-width: 480px) {
    font-size: 1.125rem;
    margin: 0.75rem 0;
    line-height: 1.3;
  }
`;

export const Meta = styled.div`
  ${typography.body2}
  color: ${({ theme }) => theme.colors.text.secondary};

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

export const Content = styled.div`
  ${typography.body1}
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: 1.8;
  white-space: pre-wrap;
  min-height: 300px;
  width: 100%;
  box-sizing: border-box;
  word-wrap: break-word;
  overflow-wrap: break-word;

  @media (max-width: 1024px) {
    font-size: 0.95rem;
    line-height: 1.7;
    min-height: 250px;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.6;
    min-height: 200px;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
    line-height: 1.5;
    min-height: 150px;
  }
`;
