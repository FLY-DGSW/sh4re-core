import { typography } from "@/styles/typography";
import styled from "styled-components";

export const SubmitForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  ${typography.body1}
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: 600;
`;

export const Textarea = styled.textarea`
  ${typography.body1}
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.background.primary};
  color: ${({ theme }) => theme.colors.text.primary};
  min-height: 120px;
  resize: vertical;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary.blue};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary.blue}30;
  }
`;

export const FileInput = styled.input`
  display: none;
`;

export const FileUploadButton = styled.label<{ disabled?: boolean }>`
  ${typography.body1}
  padding: 0.75rem 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  background-color: ${({ theme, disabled }) =>
    disabled
      ? theme.colors.background.secondary
      : theme.colors.background.primary};
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.text.secondary : theme.colors.text.primary};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  text-align: center;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme, disabled }) =>
      !disabled && theme.colors.background.secondary};
  }
`;

export const SubmitButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1rem;
`;

export const SubmitButton = styled.button`
  ${typography.body1}
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.primary.blue};
  color: white;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.2s;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.primary.blue};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.text.secondary};
    cursor: not-allowed;
  }
`;
