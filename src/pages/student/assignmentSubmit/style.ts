import { typography } from "@/styles/typography";
import { AssignmentLabelProps } from "@/types/assignment/assignment";
import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background.secondary};
  height: 100vh;
  padding: 2rem;
  display: flex;
  justify-content: center;
`;

export const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  ${typography.body1}
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text.primary};
  border: none;
  gap: 0.5rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
`;

export const Content = styled.div`
  display: flex;
  gap: 1.5rem;
  height: 100%;
`;

export const AssignmentInfo = styled.div`
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  overflow-y: auto;
  height: 100%;
  width: 100%;
`;

export const AssignmentHeader = styled.div`
  padding: 2rem 2.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const StatusBadge = styled.span<AssignmentLabelProps>`
  display: inline-block;
  margin-bottom: 1rem;
  ${typography.body2}
  color: ${({ label, theme }) =>
    label === "할당됨"
      ? theme.colors.primary.green
      : label === "제출됨"
      ? theme.colors.primary.blue
      : label === "누락됨"
      ? theme.colors.primary.red
      : "black"};
`;

export const AssignmentTitle = styled.h1`
  ${typography.heading3}
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 0.5rem 0;
`;

export const AssignmentMeta = styled.p`
  ${typography.body2}
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0;
`;

export const AssignmentContent = styled.div`
  padding: 2.5rem;
  ${typography.body1}
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: 1.8;
  white-space: pre-wrap;
`;

export const SubmitSection = styled.div`
  width: 50%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 2rem 2.5rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

export const SectionTitle = styled.h2`
  ${typography.subHeading1}
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 2rem 0;
`;

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

export const Required = styled.span`
  color: ${({ theme }) => theme.colors.primary.red};
  margin-left: 0.25rem;
`;

export const Input = styled.input`
  ${typography.body1}
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.background.primary};
  color: ${({ theme }) => theme.colors.text.primary};
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary.blue};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary.blue}30;
  }
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

export const FileList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
`;

export const FileItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${typography.body2}
  color: ${({ theme }) => theme.colors.text.primary};
  padding: 0.5rem 0.75rem;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border-radius: 4px;
`;

export const FileRemoveButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary.red};
  cursor: pointer;
  font-size: 1.2rem;

  &:disabled {
    color: ${({ theme }) => theme.colors.text.secondary};
    cursor: not-allowed;
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

export const SuccessMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;

  h3 {
    ${typography.heading2}
    color: ${({ theme }) => theme.colors.text.primary};
    margin: 1.5rem 0 0.5rem 0;
  }

  p {
    ${typography.body1}
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const SuccessIcon = styled.div`
  font-size: 4rem;
`;

export const SubmittedInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 1.5rem;
`;

export const InfoRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const InfoLabel = styled.span`
  ${typography.body1}
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const InfoValue = styled.div`
  ${typography.body1}
  color: ${({ theme }) => theme.colors.text.primary};
  white-space: pre-wrap;
`;

export const ResubmitNote = styled.p`
  ${typography.body2}
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-top: auto; /* 하단에 고정 */
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border-radius: 4px;
  text-align: center;
`;
