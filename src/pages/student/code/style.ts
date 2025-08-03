import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.background.secondary};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

export const SearchWrapper = styled.div`
  width: 24rem;
`;

export const DropdownContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const CodeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: center;
  gap: 1.5rem;
`;

export const CodeContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 280px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background.primary};
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.18);
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const CodeBox = styled.div`
  overflow: hidden;
  height: 100%;
  background-color: #24292e;

  pre {
    margin: 0;
    height: 100%;
    overflow: hidden;
    white-space: pre-wrap;
    font-size: 0.875rem;
  }
`;

export const CodeInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 20px;
  height: 50px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const CodeTitle = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1.2rem;
  font-weight: 600;
  align-self: center;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const StudentInfo = styled.div`
  font-size: 0.9rem;
  text-align: right;
  align-self: center;
  color: ${({ theme }) => theme.colors.text.secondary};
`;
