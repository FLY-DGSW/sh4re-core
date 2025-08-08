import styled from "styled-components";
import { typography } from "@/styles/typography";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  max-width: 100%;
  padding: 2rem 3rem;
  background-color: ${({ theme }) => theme.colors.background.secondary};
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
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

export const PageTitle = styled.h1`
  ${typography.heading2}
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;

  @media (max-width: 768px) {
    ${typography.heading3}
  }
`;

export const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  flex: 1;
  min-height: 0;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const EditorSection = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  min-height: 500px;

  @media (max-width: 1024px) {
    min-height: 400px;
  }
`;

export const EditorContainer = styled.div`
  flex: 1;
  min-height: 500px;
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 1024px) {
    min-height: 400px;
  }

  .monaco-editor {
    border-radius: 8px;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #1e1e1e;
  color: #cccccc;
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;


export const SectionTitle = styled.h2`
  ${typography.subHeading1}
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 1.5rem 0;

  @media (max-width: 768px) {
    ${typography.body1}
    font-weight: 600;
    margin-bottom: 1rem;
  }
`;

export const LanguageTabs = styled.div`
  display: flex;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.colors.background.light};
  padding: 0.25rem;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.background.secondary};
`;

export const LanguageTab = styled.button<{ $active: boolean }>`
  ${typography.body1}
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme, $active }) => 
    $active ? theme.colors.primary.blue : 'transparent'};
  color: ${({ theme, $active }) => 
    $active ? 'white' : theme.colors.text.secondary};
  cursor: pointer;
  font-weight: ${({ $active }) => $active ? '600' : '400'};
  transition: all 0.2s ease;
  flex: 1;
  text-align: center;

  &:hover {
    background-color: ${({ theme, $active }) => 
      $active ? theme.colors.primary.blue : theme.colors.background.secondary};
    color: ${({ theme, $active }) => 
      $active ? 'white' : theme.colors.text.primary};
  }

  &:focus {
    outline: none;
    box-shadow: ${({ $active }) => 
      $active ? 'none' : '0 0 0 2px rgba(0, 149, 255, 0.3)'};
  }

  @media (max-width: 480px) {
    padding: 0.4rem 0.75rem;
    font-size: 0.9rem;
  }
`;


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 1;
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

export const Input = styled.input`
  ${typography.body1}
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.background.secondary};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.background.light};
  color: ${({ theme }) => theme.colors.text.primary};
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary.blue};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary.blue}30;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const Select = styled.select`
  ${typography.body1}
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.background.secondary};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.background.light};
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary.blue};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary.blue}30;
  }

  option {
    background-color: ${({ theme }) => theme.colors.background.light};
    color: ${({ theme }) => theme.colors.text.primary};
    padding: 0.5rem;
  }
`;


export const Textarea = styled.textarea`
  ${typography.body1}
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.background.secondary};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.background.light};
  color: ${({ theme }) => theme.colors.text.primary};
  resize: vertical;
  min-height: 100px;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary.blue};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary.blue}30;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: auto;
  padding-top: 1rem;

  @media (max-width: 480px) {
    flex-direction: column-reverse;
  }
`;

export const BaseButton = styled.button`
  ${typography.body1}
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s;
  min-width: 120px;

  @media (max-width: 480px) {
    width: 100%;
    min-width: auto;
  }
`;

export const SubmitButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.colors.primary.blue};
  color: white;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.primary.blue};
    transform: translateY(-1px);
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.text.secondary};
    cursor: not-allowed;
    transform: none;
  }
`;

export const CancelButton = styled(BaseButton)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text.secondary};
  border: 1px solid ${({ theme }) => theme.colors.background.secondary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.secondary};
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;