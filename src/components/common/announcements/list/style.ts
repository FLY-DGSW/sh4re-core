import styled from "styled-components";

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  background-color: ${({ theme }) => theme.colors.background.secondary};
`;