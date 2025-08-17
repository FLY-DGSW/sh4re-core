import { useQuery } from "@tanstack/react-query";
import sh4reCustomAxios from "@/api/sh4reCustomAxios";
import { CODE } from "@/constants/queryKeys";

import type { CodeDetailType } from "@/types/code/code";

const fetchCode = async (codeId: number): Promise<CodeDetailType> => {
  const res = await sh4reCustomAxios.get<CodeDetailType>(
    `/codes/${codeId}`
  );
  return res.data;
};

export const useCode = (codeId: number) => {
  return useQuery({
    queryKey: [CODE.DETAIL, codeId],
    queryFn: () => fetchCode(codeId),
    enabled: !!codeId,
    staleTime: 5 * 60 * 1000,
  });
};
