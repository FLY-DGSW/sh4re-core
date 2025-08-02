import sh4reCustomAxios from "@/api/sh4reCustomAxios";
import { ACCESS_TOKEN_KEY } from "@/constants/token.constants";
import token from "@/libs/token/token";
import { useQuery } from "@tanstack/react-query";

export const useUser = () => {
  const accessToken = token.getToken(ACCESS_TOKEN_KEY);

  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const { data } = await sh4reCustomAxios.get("/user/me");
      return data.data.me;
    },
    staleTime: 5 * 60 * 1000,
    enabled: !!accessToken,
  });
};
