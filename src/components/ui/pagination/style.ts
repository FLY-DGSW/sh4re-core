import { typography } from "@/styles/typography";
import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

export const PaginationButton = styled.button`
  ${typography.body1}
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.background.light};
  background-color: ${({ theme }) => theme.colors.background.primary};
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const PageIndicator = styled.span`
  ${typography.body1}
  margin: 0 1rem;
  color: ${({ theme }) => theme.colors.text.primary};
`;
