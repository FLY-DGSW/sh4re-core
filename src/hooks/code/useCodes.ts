import { useQuery } from "@tanstack/react-query";
import sh4reCustomAxios from "@/api/sh4reCustomAxios";
import { CODE } from "@/constants/queryKeys";
import type { CodeType } from "@/types/code/code";

interface GetAllCodesResponse {
  ok: boolean;
  code: string;
  message: string;
  data: CodeType[] | { codes: CodeType[] };
}

const fetchCodes = async (): Promise<CodeType[]> => {
  const response = await sh4reCustomAxios.get<GetAllCodesResponse>("/codes");

  const data = response.data.data;
  if (Array.isArray(data)) {
    return data;
  } else if (
    data &&
    typeof data === "object" &&
    "codes" in data &&
    Array.isArray(data.codes)
  ) {
    return data.codes;
  } else {
    console.error("Unexpected API response structure:", data);
    return [];
  }
};

export const useCodes = () => {
  return useQuery({
    queryKey: [CODE.LIST],
    queryFn: fetchCodes,
    staleTime: 5 * 60 * 1000,
  });
};
