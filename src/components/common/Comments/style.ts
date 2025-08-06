import styled from "styled-components";
import { typography } from "@/styles/typography";

export const Container = styled.div`
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Title = styled.h2`
  ${typography.heading3}
  margin-bottom: 1.5rem;
`;

export const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CommentItem = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.background.primary};
  padding-bottom: 1rem;
`;

export const CommentAuthor = styled.p`
  ${typography.subHeading2}
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const CommentContent = styled.p`
  ${typography.body1}
`;

export const CommentForm = styled.form`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const CommentInput = styled.input`
  flex-grow: 1;
  padding: 0 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.background.primary};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.background.light};
  color: ${({ theme }) => theme.colors.text.primary};
  ${typography.body1}
`;

export const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.button.primary};
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  ${typography.body1}

  &:hover {
    opacity: 0.9;
  }
`;
