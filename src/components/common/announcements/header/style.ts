import { typography } from "@/styles/typography";
import styled from "styled-components";

export const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 100%;
  gap: 1rem;
  padding: 3px 0;
  margin: -3px 0;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }

  @media (max-width: 768px) {
    gap: 0.875rem;
  }

  @media (max-width: 480px) {
    gap: 0.75rem;
  }
`;

export const PageTitle = styled.span`
  ${typography.heading1}
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;

  @media (max-width: 1024px) {
    order: 1;
    text-align: left;
  }

  @media (max-width: 768px) {
    font-size: 1.375rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;

  @media (max-width: 1024px) {
    order: 2;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  @media (max-width: 768px) {
    gap: 0.75rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0.5rem;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  color: ${({ theme }) => theme.colors.text.primary};
  ${typography.body1}
  white-space: nowrap;

  input[type="checkbox"] {
    cursor: pointer;
  }

  label {
    cursor: pointer;
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
    justify-content: flex-start;
  }
`;
