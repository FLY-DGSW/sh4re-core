import React from "react";
import styled from "styled-components";
import { typography } from "@/styles/typography";
import { FiArrowLeft } from "react-icons/fi";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  ${typography.body1}
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text.primary};
  border: none;
  gap: 0.5rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

interface BackButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick, children }) => {
  return (
    <StyledButton onClick={onClick}>
      <FiArrowLeft />
      {children || "뒤로가기"}
    </StyledButton>
  );
};

export default BackButton;