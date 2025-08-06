import styled from "styled-components";

import { typography } from "@/styles/typography";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  max-width: 100%;
  padding: 2rem 3rem;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  overflow-x: hidden;
  overflow-y: auto;
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

export const PageTitle = styled.h1`
  ${typography.heading1}
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text.primary};
  justify-self: start;
  margin: 0;

  @media (max-width: 1024px) {
    order: 1;
  }
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  margin-bottom: 1.5rem;
  gap: 1rem;
  width: 100%;
  max-width: 100%;
  padding: 3px 0;
  margin: -3px 0;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export const SearchWrapper = styled.div`
  justify-self: center;
  width: 100%;
  max-width: 24rem;

  @media (max-width: 1200px) {
    max-width: 20rem;
  }

  @media (max-width: 1024px) {
    justify-self: stretch;
    max-width: 100%;
    order: 2;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const DropdownContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-self: end;
  flex-shrink: 0;
  align-items: center;

  @media (max-width: 1200px) {
    gap: 0.375rem;
  }

  @media (max-width: 1024px) {
    justify-self: stretch;
    flex-wrap: wrap;
    justify-content: flex-start;
    order: 3;
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
    gap: 0.75rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const CodeGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  margin-top: 1rem;

  @media (min-width: 1600px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    max-width: 1400px;
    margin: 0 auto;
  }

  @media (min-width: 1280px) and (max-width: 1599px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.25rem;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.25rem;
  }

  @media (min-width: 480px) and (max-width: 767px) {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1rem;
  }

  @media (max-width: 479px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const CodeContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 100%;
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
