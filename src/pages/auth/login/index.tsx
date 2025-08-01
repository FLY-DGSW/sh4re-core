import { useForm } from "react-hook-form";
import * as S from "./style";
import Sh4reLogo from "@/assets/sh4re-logo.svg?url";
import useLogin from "@/hooks/auth/login/useLogin";

interface userInfoData {
  username: string;
  password: string;
}

const LoginPage = () => {
  const { register, handleSubmit } = useForm<userInfoData>();
  const { login } = useLogin();

  const onSubmit = async (data: userInfoData) => {
    await login(data);
  };

  return (
    <S.Container>
      <S.LoginBox>
        <S.HeaderBox>
          <S.Logo src={Sh4reLogo} alt='Sh4re Logo' />
          <S.Title>온라인 코드 공유 플랫폼</S.Title>
        </S.HeaderBox>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.InputContainer>
            <S.Input
              {...register("username")}
              type='text'
              placeholder='아이디를 입력하세요.'
            />
            <S.Input
              {...register("password")}
              type='password'
              placeholder='비밀번호를 입력하세요.'
            />
          </S.InputContainer>
          <S.ButtonContainer>
            <S.Button type='submit'>로그인</S.Button>
            <S.GoogleButton type='button'>Google로 로그인</S.GoogleButton>
          </S.ButtonContainer>
        </S.Form>
      </S.LoginBox>
    </S.Container>
  );
};

export default LoginPage;
