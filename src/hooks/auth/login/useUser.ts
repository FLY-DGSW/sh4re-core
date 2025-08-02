import sh4reCustomAxios from "@/api/sh4reCustomAxios";
import { useQuery } from "@tanstack/react-query";

export const useUser = () =>
  useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const { data } = await sh4reCustomAxios.get("/user/me");
      return data.data.me;
    },
    staleTime: 5 * 60 * 1000,
  });
