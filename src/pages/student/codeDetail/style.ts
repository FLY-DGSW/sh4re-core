import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 2rem;
  background-color: ${({ theme }) => theme.colors.background.secondary};
`;

export const MainContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  height: 70vh;
`;

export const CodeContainer = styled.div`
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  height: 100%;
`;

export const FullScreenCodeContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #282c34;
  z-index: 9999;
  display: flex;
  flex-direction: column;

  .simplebar-content {
    height: 100%;
  }
`;

export const FontControlButton = styled.button`
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const FontControlWrapper = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  z-index: 10;
  display: flex;
  gap: 0.5rem;
`;

export const DetailsContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-radius: 4px;
  padding: 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const CommentsContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-radius: 4px;
  padding: 1.5rem;
`;
