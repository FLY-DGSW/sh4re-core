import { typography } from "@/styles/typography";
import styled from "styled-components";

export const HandoutWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background.primary};
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 1.25rem 1.5rem;
  cursor: pointer;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding: 1.125rem 1.25rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 1rem;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  @media (max-width: 480px) {
    padding: 0.875rem 0.875rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

export const Icon = styled.img`
  width: 1.5rem;
  margin-right: 0.5rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 1.25rem;
    margin-right: 0.375rem;
  }

  @media (max-width: 480px) {
    width: 1.125rem;
    margin-right: 0;
  }
`;

export const Title = styled.span`
  ${typography.subHeading2}
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text.primary};
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
    white-space: normal;
    text-overflow: unset;
    overflow: visible;
    line-height: 1.4;
  }
`;

export const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    gap: 0.375rem;
  }

  @media (max-width: 480px) {
    align-self: flex-end;
    width: 100%;
    justify-content: space-between;
  }
`;

export const Date = styled.span`
  ${typography.body2}
  color: ${({ theme }) => theme.colors.text.secondary};
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

export const ItemDiv = Item;
