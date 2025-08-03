import { typography } from "@/styles/typography";
import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background.secondary};
  height: 100vh;
  padding: 2rem;
  display: flex;
  justify-content: center;
`;

export const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  ${typography.body1}
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text.primary};
  border: none;
  gap: 0.5rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
`;

export const Content = styled.div`
  display: flex;
  gap: 1.5rem;
  height: 100%;
`;

export const SubmitSection = styled.div`
  width: 50%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 2rem 2.5rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

export const SectionTitle = styled.h2`
  ${typography.subHeading1}
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 2rem 0;
`;