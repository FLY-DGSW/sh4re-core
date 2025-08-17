import sh4reCustomAxios from "@/api/sh4reCustomAxios";
import { ACCESS_TOKEN_KEY } from "@/constants/token.constants";
import token from "@/libs/token/token";
import { UserWithClassInfo } from "@/types/user/user";
import { useQuery } from "@tanstack/react-query";

export const useUser = () => {
  const accessToken = token.getToken(ACCESS_TOKEN_KEY);

  return useQuery({
    queryKey: ["user"],
    queryFn: async (): Promise<UserWithClassInfo> => {
      const { data } = await sh4reCustomAxios.get("/users/me");
      return data.me;
    },
    staleTime: 5 * 60 * 1000,
    enabled: !!accessToken,
  });
};
