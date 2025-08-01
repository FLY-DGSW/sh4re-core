import { typography } from "@/styles/typography";
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
  ${typography.subHeading2}
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

export const Input = styled.input`
  border-radius: 0.75rem;
  padding: 1rem;
  width: 24rem;
  height: 3rem;
  background-color: ${({ theme }) => theme.colors.background.light};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const ButtonContainer = styled(InputContainer)``;

export const Button = styled.button`
  width: 24rem;
  height: 3rem;
  border-radius: 0.75rem;
  background-color: ${({ theme }) => theme.colors.button.black};
  color: white;
  border: none;
  cursor: pointer;
`;

export const GoogleButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.button.white};
  color: ${({ theme }) => theme.colors.text.primary};
`;
