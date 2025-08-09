import { typography } from "@/styles/typography";
import { AssignmentLabelProps } from "@/types/assignment/assignment";
import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background.secondary};
  min-height: 100vh;
  width: 100%;
  max-width: 100%;
  padding: 2rem 3rem;
  display: flex;
  justify-content: center;
  box-sizing: border-box;

  @media (max-width: 1440px) {
    padding: 2rem 2rem;
  }

  @media (max-width: 1024px) {
    padding: 1.5rem 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 0.75rem;
  }
`;

export const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 100%;
  min-height: calc(100vh - 4rem);
  box-sizing: border-box;

  @media (max-width: 768px) {
    gap: 1.25rem;
    min-height: calc(100vh - 2rem);
  }

  @media (max-width: 480px) {
    gap: 1rem;
    min-height: calc(100vh - 1.5rem);
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-shrink: 0;
`;

export const Content = styled.div`
  display: flex;
  gap: 1.5rem;
  flex: 1;
  width: 100%;
  max-width: 100%;
  min-height: 0;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 1.25rem;
  }

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const SubmitSection = styled.div`
  width: 50%;
  min-height: 0;
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-radius: 4px;
  padding: 2rem 2.5rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 100%;
    flex: none;
    min-height: 400px;
    padding: 1.75rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1.5rem;
    border-radius: 8px;
    min-height: 350px;
  }

  @media (max-width: 480px) {
    padding: 1.25rem 1.25rem;
    border-radius: 12px;
    min-height: 300px;
  }
`;

export const SectionTitle = styled.h2`
  ${typography.subHeading1}
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 2rem 0;

  @media (max-width: 768px) {
    font-size: 1.125rem;
    margin: 0 0 1.5rem 0;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin: 0 0 1.25rem 0;
  }
`;

export const AssignmentInfo = styled.div`
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-radius: 4px;
  overflow-y: auto;
  height: 100%;
  width: 50%;
  padding: 2rem;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 100%;
    flex: none;
    min-height: 400px;
    max-height: 450px;
    padding: 1.75rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 8px;
    min-height: 350px;
  }

  @media (max-width: 480px) {
    padding: 1.25rem;
    border-radius: 12px;
    min-height: 300px;
  }
`;

export const AssignmentHeader = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    padding-bottom: 1.25rem;
    margin-bottom: 1.25rem;
  }

  @media (max-width: 480px) {
    padding-bottom: 1rem;
    margin-bottom: 1rem;
  }
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

  @media (max-width: 768px) {
    margin-bottom: 0.875rem;
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 0.75rem;
    font-size: 0.75rem;
  }
`;

export const AssignmentTitle = styled.h1`
  ${typography.heading3}
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 0.5rem 0;
  word-wrap: break-word;
  overflow-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin: 0 0 0.4375rem 0;
  }

  @media (max-width: 480px) {
    font-size: 1.125rem;
    margin: 0 0 0.375rem 0;
    line-height: 1.3;
  }
`;

export const AssignmentMeta = styled.p`
  ${typography.body2}
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

export const AssignmentContent = styled.div`
  ${typography.body1}
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: 1.8;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.6;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
    line-height: 1.5;
  }
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

export const Textarea = styled.textarea`
  ${typography.body1}
  padding: 0.75rem;
  border-radius: 4px;
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
  border-radius: 4px;
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
  border-radius: 4px;
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

export const ResubmitNote = styled.p`
  ${typography.body2}
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-top: auto;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border-radius: 4px;
  text-align: center;
`;
