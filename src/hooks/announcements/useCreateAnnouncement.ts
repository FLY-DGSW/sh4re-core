import { useMutation, useQueryClient } from "@tanstack/react-query";
import sh4reCustomAxios from "@/api/sh4reCustomAxios";
import { ANNOUNCEMENTS_QUERY_KEY } from "@/constants/queryKeys";
import type { CreateAnnouncementReq, CreateAnnouncementResponse } from "@/types/announcements/announcements";

const createAnnouncement = async (
  data: CreateAnnouncementReq
): Promise<CreateAnnouncementResponse> => {
  const response = await sh4reCustomAxios.post<CreateAnnouncementResponse>("/announcements", data);
  return response.data;
};

export const useCreateAnnouncement = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createAnnouncement,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ANNOUNCEMENTS_QUERY_KEY.all });
    },
  });
};