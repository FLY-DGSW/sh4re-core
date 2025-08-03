import React from "react";
import * as S from "./style";
import { FiArrowLeft } from "react-icons/fi";

interface BackButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick, children }) => {
  return (
    <S.StyledButton onClick={onClick}>
      <FiArrowLeft />
      {children || "뒤로가기"}
    </S.StyledButton>
  );
};

export default BackButton;
