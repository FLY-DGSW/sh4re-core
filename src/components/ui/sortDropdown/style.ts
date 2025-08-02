import { typography } from "@/styles/typography";
import styled from "styled-components";

export const SortSelect = styled.select`
  ${typography.body1}
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.background.light};
  background-color: ${({ theme }) => theme.colors.background.primary};
  color: ${({ theme }) => theme.colors.text.primary};
  border-radius: 4px;
  cursor: pointer;
`;
