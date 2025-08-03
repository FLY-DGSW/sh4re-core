import styled from "styled-components";
import { typography } from "@/styles/typography";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  ${typography.body1}
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text.primary};
  border: none;
  gap: 0.5rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
