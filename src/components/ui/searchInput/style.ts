import { typography } from "@/styles/typography";
import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const SearchInput = styled.input`
  ${typography.body1}
  flex: 1;
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.background.light};
  background-color: ${({ theme }) => theme.colors.background.primary};
  color: ${({ theme }) => theme.colors.text.primary};
  border-radius: 4px;
`;

export const SearchButton = styled.button`
  ${typography.body1}
  padding: 0.5rem 1rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary.blue};
  color: ${({ theme }) => theme.colors.text.button};
  border-radius: 4px;
  cursor: pointer;
`;
