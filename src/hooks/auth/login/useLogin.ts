import { useNavigate } from "react-router-dom";
import sh4reCustomAxios from "@/api/sh4reCustomAxios";
import token from "@/libs/token/token";

const useLogin = () => {
  const navigate = useNavigate();

  const login = async (userInfo: { username: string; password: string }) => {
    try {
      const { data } = await sh4reCustomAxios.post("/api/auth/login", userInfo);
      if (data) {
        const accessToken = data.data.accessToken;
        token.setToken("accessToken", accessToken);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
      navigate("/login");
      return;
    }
  };
  return { login };
};

export default useLogin;
