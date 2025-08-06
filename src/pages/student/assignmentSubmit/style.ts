import { typography } from "@/styles/typography";
import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background.secondary};
  min-height: 100vh;
  width: 100%;
  max-width: 100%;
  padding: 2rem 3rem;
  display: flex;
  justify-content: center;
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

export const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 100%;
  min-height: calc(100vh - 4rem);
  box-sizing: border-box;

  @media (max-width: 768px) {
    gap: 1.25rem;
    min-height: calc(100vh - 2rem);
  }

  @media (max-width: 480px) {
    gap: 1rem;
    min-height: calc(100vh - 1.5rem);
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-shrink: 0;
`;

export const Content = styled.div`
  display: flex;
  gap: 1.5rem;
  flex: 1;
  width: 100%;
  max-width: 100%;
  min-height: 0;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 1.25rem;
  }

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const SubmitSection = styled.div`
  width: 50%;
  min-height: 0;
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-radius: 4px;
  padding: 2rem 2.5rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 100%;
    flex: none;
    min-height: 400px;
    padding: 1.75rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1.5rem;
    border-radius: 8px;
    min-height: 350px;
  }

  @media (max-width: 480px) {
    padding: 1.25rem 1.25rem;
    border-radius: 12px;
    min-height: 300px;
  }
`;

export const SectionTitle = styled.h2`
  ${typography.subHeading1}
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 2rem 0;

  @media (max-width: 768px) {
    font-size: 1.125rem;
    margin: 0 0 1.5rem 0;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin: 0 0 1.25rem 0;
  }
`;
