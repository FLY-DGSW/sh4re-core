import { useMutation, useQueryClient } from '@tanstack/react-query';
import sh4reCustomAxios from '@/api/sh4reCustomAxios';
import { CODE } from '@/constants/queryKeys';

interface ToggleLikeResponse {
  isLiked: boolean;
  likeCount: number;
}

const toggleCodeLike = async (codeId: number): Promise<ToggleLikeResponse> => {
  const response = await sh4reCustomAxios.post<ToggleLikeResponse>(`/codes/${codeId}/like`);
  return response.data;
};

export const useToggleCodeLike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: toggleCodeLike,
    onSuccess: (_, codeId) => {
      queryClient.invalidateQueries({ queryKey: [CODE.DETAIL, codeId] });
      queryClient.invalidateQueries({ queryKey: [CODE.LIST] });
    },
  });
};
