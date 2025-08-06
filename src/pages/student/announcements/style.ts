import styled from "styled-components";

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

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  flex: 1;
  width: 100%;
  max-width: 100%;
  overflow-y: auto;

  @media (max-width: 768px) {
    gap: 1rem;
  }

  @media (max-width: 480px) {
    gap: 0.875rem;
  }
`;