import { useMutation, useQueryClient } from "@tanstack/react-query";
import sh4reCustomAxios from "@/api/sh4reCustomAxios";
import { CODE } from "@/constants/queryKeys";
import type { CreateCodeRequest } from "./useCreateCode";

interface UpdateCodeResponse {
  ok: boolean;
  code: string;
  message: string;
  data: {
    codeId: number;
  };
}

const updateCode = async (
  codeId: number,
  data: CreateCodeRequest
): Promise<UpdateCodeResponse> => {
  const response = await sh4reCustomAxios.patch(`/codes/${codeId}`, data);
  return response.data;
};

export const useUpdateCode = (codeId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateCodeRequest) => updateCode(codeId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [CODE.LIST] });
      queryClient.invalidateQueries({ queryKey: [CODE.DETAIL, codeId] });
    },
  });
};
