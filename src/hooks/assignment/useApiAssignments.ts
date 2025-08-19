import { useQuery } from "@tanstack/react-query";
import sh4reCustomAxios from "@/api/sh4reCustomAxios";
import { ASSIGNMENTS_QUERY_KEY } from "@/constants/queryKeys";
import type { AssignmentsApiResponse } from "@/types/assignment/assignment";

const fetchAssignments = async (): Promise<AssignmentsApiResponse> => {
  const response = await sh4reCustomAxios.get<AssignmentsApiResponse>("/assignments");
  return response.data;
};

export const useApiAssignments = () => {
  return useQuery({
    queryKey: ASSIGNMENTS_QUERY_KEY.all,
    queryFn: fetchAssignments,
  });
};