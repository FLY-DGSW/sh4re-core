import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background.secondary};
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const Logo = styled.img`
  width: 14rem;
  height: 6rem;
`;

export const Title = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.primary.blue};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.75rem;
  align-self: stretch;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const InputBox = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  user-select: none;
  border: 1px solid ${({ theme }) => theme.colors.placeholder};
  box-sizing: border-box;
  border-radius: 10px;
`;

export const InputIcon = styled.img`
  position: absolute;
  left: 15px;
  margin-bottom: 3px;
  user-select: none;
`;

export const Input = styled.input`
  width: 24rem;
  height: 3rem;
  border-radius: 0.75rem;
  padding: 1rem;
  padding-left: 40px;
  background-color: ${({ theme }) => theme.colors.background.light};
  border: 1px solid ${({ theme }) => theme.colors.border};
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary.blue};
    outline: 1px solid ${({ theme }) => theme.colors.primary.blue};
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;

export const ButtonContainer = styled(InputContainer)``;

export const Button = styled.button`
  width: 24rem;
  height: 3rem;
  border-radius: 0.75rem;
  background-color: ${({ theme }) => theme.colors.button.black};
  font-size: 1rem;
  color: white;
  border: none;
  cursor: pointer;
`;
