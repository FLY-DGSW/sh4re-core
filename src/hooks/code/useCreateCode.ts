import { useMutation, useQueryClient } from "@tanstack/react-query";
import sh4reCustomAxios from "@/api/sh4reCustomAxios";
import { CODE } from "@/constants/queryKeys";
import type { CodeType } from "@/types/code/code";

export interface CreateCodeRequest {
  title: string;
  description?: string;
  language: CodeType["language"];
  assignment?: string;
  code: string;
  className: string;
}

interface CreateCodeResponse {
  ok: boolean;
  code: string;
  message: string;
  data: {
    codeId: number;
  };
}

const createCode = async (
  data: CreateCodeRequest
): Promise<CreateCodeResponse> => {
  const sanitizedData = { ...data };
  if (!sanitizedData.assignment) {
    delete sanitizedData.assignment;
  }
  if (!sanitizedData.description) {
    delete sanitizedData.description;
  }

  const response = await sh4reCustomAxios.post("/codes", sanitizedData);
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
