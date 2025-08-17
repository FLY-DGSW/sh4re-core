import { useMutation, useQueryClient } from "@tanstack/react-query";
import sh4reCustomAxios from "@/api/sh4reCustomAxios";
import { CODE } from "@/constants/queryKeys";
import type { UpdateCodeReq } from "@/types/code/code";

const updateCode = async (
  codeId: number,
  data: UpdateCodeReq
): Promise<void> => {
  await sh4reCustomAxios.patch(`/codes/${codeId}`, data);
};

export const useUpdateCode = (codeId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateCodeReq) => updateCode(codeId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [CODE.LIST] });
      queryClient.invalidateQueries({ queryKey: [CODE.DETAIL, codeId] });
    },
  });
};
