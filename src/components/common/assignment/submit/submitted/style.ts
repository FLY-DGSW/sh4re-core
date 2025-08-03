import { typography } from "@/styles/typography";
import styled from "styled-components";

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
