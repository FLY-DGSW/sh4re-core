import { typography } from "@/styles/typography";
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
  gap: 0.5rem;
`;

export const HandoutList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  background-color: ${({ theme }) => theme.colors.background.secondary};
`;

export const HandoutWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background.primary};
`;

export const HandoutItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1.25rem 1.5rem;
  cursor: pointer;
`;

export const HandoutIcon = styled.img`
  width: 1.5rem;
  margin-right: 0.5rem;
`;

export const HandoutTitle = styled.span`
  ${typography.subHeading2}
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text.primary};
  flex: 1;
`;

export const HandoutMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const HandoutDate = styled.span`
  ${typography.body2}
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const HandoutContent = styled.div`
  padding: 0 1.5rem;
  max-height: 0;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.text.primary};
  ${typography.body1}
  line-height: 1.6;
  white-space: pre-wrap;
  transition: max-height 0.2s ease, padding 0.2s ease;
`;
