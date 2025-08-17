import { useQuery } from "@tanstack/react-query";
import sh4reCustomAxios from "@/api/sh4reCustomAxios";
import { CODE } from "@/constants/queryKeys";
import type { CodeType } from "@/types/code/code";

interface GetAllCodesResponse {
  codes: CodeType[];
}

const fetchCodes = async (): Promise<CodeType[]> => {
  const response = await sh4reCustomAxios.get<GetAllCodesResponse>("/codes");
  return response.data.codes;
};

export const useCodes = () => {
  return useQuery({
    queryKey: [CODE.LIST],
    queryFn: fetchCodes,
    staleTime: 5 * 60 * 1000,
  });
};
