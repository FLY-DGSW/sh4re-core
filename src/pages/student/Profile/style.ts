import styled from "styled-components";
import { typography } from "@/styles/typography";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 3rem;
  gap: 1.5rem;
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
    gap: 1.25rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 1rem;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 0.75rem;
    gap: 0.875rem;
  }
`;

export const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-radius: 8px;
  padding: 2rem;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1.5rem;
    gap: 1.5rem;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    padding: 1.25rem;
    gap: 1.25rem;
    border-radius: 16px;
  }
`;

export const TopSection = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  padding-bottom: 1.5rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    padding-bottom: 1.25rem;
    gap: 1.25rem;
    align-items: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    padding-bottom: 1rem;
    gap: 1rem;
    align-items: stretch;
  }
`;

export const UserInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
  min-width: 0;

  @media (max-width: 768px) {
    flex: 2;
  }
`;

export const UserInfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }

  @media (max-width: 480px) {
    text-align: center;
    align-items: center;
  }
`;

export const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${({ theme }) => theme.colors.border};
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
  }

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
  }
`;

export const UserInfoText = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;

  @media (max-width: 480px) {
    align-items: center;
    text-align: center;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 0.25rem;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.125rem;
    margin-bottom: 0.5rem;
  }
`;

export const UserName = styled.h1`
  ${typography.heading3}
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.125rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const UserDetail = styled.p`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 1rem;
  ${typography.body2}
  color: ${({ theme }) => theme.colors.placeholder};
  margin-bottom: 0.25rem;
  word-wrap: break-word;
  overflow-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
    justify-content: center;
    margin-bottom: 0.1875rem;
  }

  svg {
    flex-shrink: 0;

    @media (max-width: 768px) {
      width: 14px;
      height: 14px;
    }

    @media (max-width: 480px) {
      width: 12px;
      height: 12px;
    }
  }
`;

export const UserDetailSecondary = styled(UserDetail)`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.875rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

export const AssignmentProgressSection = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;

  @media (max-width: 768px) {
    padding: 1.25rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    border-radius: 12px;
  }
`;

export const StatsSection = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-shrink: 0;

  @media (max-width: 1024px) {
    width: 100%;
    justify-content: center;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 0.75rem;
    flex: 1;
    justify-content: flex-end;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    justify-content: center;
  }
`;

export const StatCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.25rem;
  background-color: ${({ theme }) => theme.colors.background.light};
  border-radius: 8px;
  min-width: 120px;
  transition: border-color 0.2s ease;

  @media (max-width: 1024px) {
    flex: 1;
  }

  @media (max-width: 768px) {
    padding: 0.75rem;
    min-width: 80px;
    gap: 0.5rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    padding: 0.875rem;
    border-radius: 12px;
    min-width: 90px;
    text-align: center;
  }
`;

export const StatRow = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  width: 100%;

  @media (max-width: 480px) {
    gap: 0.5rem;
    flex-direction: column;
    text-align: center;
  }
`;

export const MyStatusRow = styled(StatRow)`
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  @media (max-width: 768px) {
    gap: 0.375rem;
  }

  @media (max-width: 480px) {
    align-items: center;
  }
`;

export const StatBox = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
  }
`;

export const MyStatBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.text.primary};

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.25rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.25rem;
    text-align: center;
  }

  svg {
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.primary.green};

    @media (max-width: 768px) {
      width: 18px;
      height: 18px;
    }

    @media (max-width: 480px) {
      width: 16px;
      height: 16px;
    }
  }
`;

export const StatLabel = styled.p`
  ${typography.body1}
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

export const StatValue = styled.p`
  ${typography.body1}
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
  display: flex;
  align-self: center;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.85rem;
    font-weight: 600;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
    align-self: center;
  }
`;

export const CodeSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  gap: 1.5rem;
  background-color: ${({ theme }) => theme.colors.background.primary};
  padding: 1.5rem;
  border-radius: 4px;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1.25rem;
    gap: 1.25rem;
    border-radius: 8px;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    gap: 1rem;
    border-radius: 12px;
  }
`;

export const SectionTitle = styled.h2`
  ${typography.heading3}
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.125rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const CodeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 100%;

  @media (min-width: 1600px) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }

  @media (min-width: 1280px) and (max-width: 1599px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.25rem;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.25rem;
  }

  @media (min-width: 480px) and (max-width: 767px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1rem;
  }

  @media (max-width: 479px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const BlankCode = styled.div`
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors.background.primary};
  padding: 1.5rem;
  border-radius: 4px;
  width: 100%;
  max-width: 100%;
  height: 100%;
`;

export const BlankTitle = styled.h2`
  ${typography.heading3}
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const LinkToCreateCode = styled.button`
  ${typography.body1}
  color: ${({ theme }) => theme.colors.primary.blue};
  background-color: transparent;
  padding: 0;
  border: none;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const CodeContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background.primary};
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.18);
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  box-sizing: border-box;

  @media (min-width: 1024px) {
    height: 280px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    height: 260px;
  }

  @media (max-width: 767px) {
    height: 240px;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 768px) {
    &:hover {
      transform: none;
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.18);
    }

    &:active {
      transform: translateY(1px);
    }
  }
`;

export const CodeBox = styled.div`
  overflow: hidden;
  height: 100%;
  background-color: #24292e;
  padding: 1rem;

  pre {
    margin: 0;
    height: 100%;
    overflow: hidden;
    white-space: pre-wrap;

    @media (min-width: 1024px) {
      font-size: 0.875rem;
      line-height: 1.4;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
      font-size: 0.8rem;
      line-height: 1.3;
    }

    @media (max-width: 767px) {
      font-size: 0.75rem;
      line-height: 1.2;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 0.875rem;
  }

  @media (max-width: 767px) {
    padding: 0.75rem;
  }
`;

export const CodeInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  min-height: 50px;
  border-top: 1px solid ${({ theme }) => theme.colors.background.secondary};

  @media (max-width: 768px) {
    padding: 8px 16px;
    gap: 8px;
    min-height: 45px;
  }

  @media (max-width: 480px) {
    padding: 8px 12px;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    min-height: auto;
  }
`;

export const CodeTitle = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 1.1rem;
  }

  @media (max-width: 767px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    white-space: normal;
    line-height: 1.3;
  }
`;

export const StudentInfo = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  text-align: right;
  flex-shrink: 0;

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 767px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    text-align: left;
    font-size: 0.8rem;
  }
`;
