import { useMutation, useQueryClient } from "@tanstack/react-query";
import sh4reCustomAxios from "@/api/sh4reCustomAxios";
import { CODE } from "@/constants/queryKeys";
import type { CreateCodeReq } from "@/types/code/code";

export interface CreateCodeRequest {
  title: string;
  description?: string;
  language: "python" | "sql" | "javascript";
  assignmentId?: number;
  code: string;
  className: string;
  useAiDescription?: boolean;
}

interface CreateCodeResponse {
  id: number;
}

const createCode = async (
  data: CreateCodeRequest
): Promise<CreateCodeResponse> => {
  const apiData: CreateCodeReq = {
    title: data.title,
    language: data.language,
    code: data.code,
    classPlacementId: 1, // int만 들어있는 array로 수정
    assignmentId: data.assignmentId,
    description: data.description,
    useAiDescription: data.useAiDescription,
  };

  const response = await sh4reCustomAxios.post<CreateCodeResponse>(
    "/codes",
    apiData
  );
  return response.data;
};

export const useCreateCode = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createCode,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [CODE.LIST] });
    },
  });
};
