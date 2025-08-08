import { useMutation, useQueryClient } from "@tanstack/react-query";
import sh4reCustomAxios from "@/api/sh4reCustomAxios";
import { CODE } from "@/constants/queryKeys";

interface DeleteCodeResponse {
  ok: boolean;
  code: string;
  message: string;
  data?: Record<string, unknown>;
}

const deleteCode = async (codeId: number): Promise<DeleteCodeResponse> => {
  const response = await sh4reCustomAxios.delete(`/codes/${codeId}`);
  return response.data;
};

export const useDeleteCode = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteCode,
    onSuccess: (_, codeId) => {
      queryClient.invalidateQueries({ queryKey: [CODE.LIST] });
      queryClient.removeQueries({ queryKey: [CODE.DETAIL, codeId] });
    },
  });
};
