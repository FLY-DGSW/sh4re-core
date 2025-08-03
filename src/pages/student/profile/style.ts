import styled from "styled-components";
import { typography } from "@/styles/typography";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 3rem;
  gap: 1.5rem;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  min-height: 100vh;
`;

export const ProfileHeader = styled.div`
  height: 15vh;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.background.primary};
`;

export const UserInfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${({ theme }) => theme.colors.border};
`;

export const UserInfoText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 0.25rem;
`;

export const UserName = styled.h1`
  ${typography.heading3}
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 0.25rem;
`;

export const UserDetail = styled.p`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 1rem;
  ${typography.body2}
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 0.25rem;
`;

export const UserDetailSecondary = styled(UserDetail)`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.875rem;
`;

export const StatRow = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  width: 24rem;
`;

export const MyStatusRow = styled(StatRow)`
  width: 16rem;
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

export const StatBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MyStatBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const StatLabel = styled.p`
  ${typography.body1}
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const StatValue = styled.p`
  ${typography.body1}
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
  display: flex;
  align-self: center;
`;

export const CodeSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: ${({ theme }) => theme.colors.background.primary};
  padding: 1.5rem;
`;

export const SectionTitle = styled.h2`
  ${typography.heading3}
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const CodeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

export const CodeContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 280px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background.primary};
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.18);
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const CodeBox = styled.div`
  overflow: hidden;
  height: 100%;
  background-color: #24292e;

  pre {
    margin: 0;
    height: 100%;
    overflow: hidden;
    white-space: pre-wrap;
    font-size: 0.875rem;
  }
`;

export const CodeInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 20px;
  height: 50px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const CodeTitle = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1.2rem;
  font-weight: 600;
  align-self: center;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const StudentInfo = styled.div`
  font-size: 0.9rem;
  text-align: right;
  align-self: center;
  color: ${({ theme }) => theme.colors.text.secondary};
`;
