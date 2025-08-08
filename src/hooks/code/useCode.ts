import { useQuery } from "@tanstack/react-query";
import sh4reCustomAxios from "@/api/sh4reCustomAxios";
import { CODE } from "@/constants/queryKeys";

export interface CodeDetailType {
  id: number;
  title: string;
  student: string;
  language: "python" | "sql" | "javascript";
  description: string;
  code: string;
  likeCount: number;
  isLikedByUser: boolean;
  className: string;
  assignment?: string;
  createdAt: string;
  updatedAt: string;
}

interface CodeDetailResponse {
  ok: boolean;
  code: string;
  message: string;
  data: CodeDetailType;
}

const fetchCode = async (codeId: number): Promise<CodeDetailType> => {
  const res = await sh4reCustomAxios.get<CodeDetailResponse>(
    `/codes/${codeId}`
  );
  return res.data.data;
};

export const useCode = (codeId: number) => {
  return useQuery({
    queryKey: [CODE.DETAIL, codeId],
    queryFn: () => fetchCode(codeId),
    enabled: !!codeId,
    staleTime: 5 * 60 * 1000,
  });
};
