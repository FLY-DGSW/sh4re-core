import { typography } from "@/styles/typography";
import styled from "styled-components";

export const HandoutWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background.primary};
`;

export const HandoutItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1.25rem 1.5rem;
  cursor: pointer;
`;

export const HandoutIcon = styled.img`
  width: 1.5rem;
  margin-right: 0.5rem;
`;

export const HandoutTitle = styled.span`
  ${typography.subHeading2}
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text.primary};
  flex: 1;
`;

export const HandoutMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const HandoutDate = styled.span`
  ${typography.body2}
  color: ${({ theme }) => theme.colors.text.secondary};
`;