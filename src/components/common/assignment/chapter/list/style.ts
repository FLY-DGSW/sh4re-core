import styled from "styled-components";

export const ChapterList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors.background.secondary};
`;