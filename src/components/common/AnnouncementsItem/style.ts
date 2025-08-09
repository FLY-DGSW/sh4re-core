import styled from "styled-components";
import { typography } from "@/styles/typography";

export const ItemWrapper = styled.div`
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

interface LabelProps {
  label: "과제" | "공지";
}

export const Label = styled.span<LabelProps>`
  ${typography.subHeading2}
  font-size: 1rem;
  color: ${({ label, theme }) =>
    label === "과제"
      ? theme.colors.primary.orange
      : label === "공지"
      ? theme.colors.primary.red
      : "black"};
  margin-right: 0.5rem;
  min-width: 40px;
  font-weight: 600;
  flex-shrink: 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    min-width: 36px;
    margin-right: 0.375rem;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
    min-width: 32px;
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

export const ChevronIcon = styled.span<{ $isOpen: boolean }>`
  ${typography.body2}
  color: ${({ theme }) => theme.colors.text.secondary};
  transition: transform 0.3s ease;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

export const Content = styled.div<{ $isOpen: boolean }>`
  padding: ${({ $isOpen }) => ($isOpen ? "1.5rem" : "0 1.5rem")};
  max-height: ${({ $isOpen }) => ($isOpen ? "1000px" : "0")};
  overflow: hidden;
  color: ${({ theme }) => theme.colors.text.primary};
  ${typography.body1}
  line-height: 1.6;
  white-space: pre-wrap;
  transition: max-height 0.3s ease, padding 0.3s ease,
    visibility 0.3s ease-in-out, opacity 0.3s ease-in-out;
  cursor: ${({ $isOpen }) => ($isOpen ? "pointer" : "default")};
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding: ${({ $isOpen }) => ($isOpen ? "1.25rem" : "0 1.25rem")};
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    padding: ${({ $isOpen }) => ($isOpen ? "1rem" : "0 1rem")};
    font-size: 0.9rem;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    padding: ${({ $isOpen }) => ($isOpen ? "0.875rem" : "0 0.875rem")};
    font-size: 0.875rem;
    line-height: 1.4;
  }
`;

export const ItemDiv = Item;
