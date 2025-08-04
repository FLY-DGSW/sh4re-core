import React from "react";
import styled from "styled-components";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ModalOverlay = styled.div`
  position: fixed;
  bottom: 1rem;
  left: 8rem;
  width: 100%;
  display: flex;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: ${({ theme }) => theme.colors.background.primary};
  padding: 0.5rem;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 6px 18px 0px;
  position: relative;
`;

const ClickToCloseOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <ClickToCloseOverlay onClick={onClose}>
      <ModalOverlay onClick={onClose}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          {children}
        </ModalContent>
      </ModalOverlay>
    </ClickToCloseOverlay>
  );
};

export default Modal;
