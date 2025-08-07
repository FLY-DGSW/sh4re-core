import { useMutation, useQueryClient } from '@tanstack/react-query';
import { sh4reCustomAxios } from '@/api/sh4reCustomAxios';
import { CODE } from '@/constants/queryKeys';

interface LikeResponse {
  // Define your like response type here
}

const toggleCodeLike = async (codeId: number): Promise<LikeResponse> => {
  const response = await sh4reCustomAxios.post(`/codes/${codeId}/like`);
  return response.data;
};

export const useToggleCodeLike = (codeId: number) => {
  const queryClient = useQueryClient();

  return useMutation(() => toggleCodeLike(codeId), {
    onSuccess: () => {
      queryClient.invalidateQueries([CODE.DETAIL, codeId]);
      queryClient.invalidateQueries([CODE.LIST]);
    },
  });
};
