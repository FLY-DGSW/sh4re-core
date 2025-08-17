import { useNavigate } from "react-router-dom";
import sh4reCustomAxios from "@/api/sh4reCustomAxios";
import token from "@/libs/token/token";
import { toast } from "react-toastify";
import ErrorMessages from "@/util/error/errorMessages";
import axios from "axios";
import { ACCESS_TOKEN_KEY } from "@/constants/token.constants";
import { useUser } from "./useUser";

const useLogin = () => {
  const navigate = useNavigate();
  const { refetch: refetchUser } = useUser();

  const login = async (userInfo: { username: string; password: string }) => {
    try {
      if (userInfo.username === "") {
        toast.info("아이디를 입력해주세요.");
        return;
      } else if (userInfo.password === "") {
        toast.info("비밀번호를 입력해주세요.");
        return;
      } else {
        const { data } = await sh4reCustomAxios.post("/auth/login", userInfo);

        if (data) {
          const accessToken = data.accessToken;
          token.setToken(ACCESS_TOKEN_KEY, accessToken);
          const { data: user } = await refetchUser();
          toast.success(`${user.name}님, 환영합니다!`);
          navigate("/");
        }
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        toast.error(ErrorMessages.loginError(status));
      } else {
        toast.error("알 수 없는 오류가 발생했습니다.");
        navigate("/login");
      }
    }
  };
  return { login };
};

export default useLogin;
