import { typography } from "@/styles/typography";
import styled from "styled-components";

export const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PageTitle = styled.span`
  ${typography.heading1}
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.text.primary};
  ${typography.body1}

  input[type="checkbox"] {
    cursor: pointer;
  }

  label {
    cursor: pointer;
    white-space: nowrap;
  }
`;