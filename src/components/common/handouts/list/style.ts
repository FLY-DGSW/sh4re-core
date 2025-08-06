import styled from "styled-components";

export const HandoutList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  width: 100%;
  max-width: 100%;
  overflow: hidden;

  @media (max-width: 768px) {
    gap: 0.0625rem;
  }
`;