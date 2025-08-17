import { useQuery } from "@tanstack/react-query";
import sh4reCustomAxios from "@/api/sh4reCustomAxios";
import { Announcement } from "@/types/announcements/announcements";
import { ANNOUNCEMENTS_QUERY_KEY } from "@/constants/queryKeys";

const fetchAnnouncementById = async (id: number): Promise<Announcement> => {
  const res = await sh4reCustomAxios.get<Announcement>(
    `/announcements/${id}`
  );
  return res.data;
};

export const useAnnouncement = (id: number | undefined) => {
  const {
    data: announcement,
    isLoading,
    error,
  } = useQuery({
    queryKey: ANNOUNCEMENTS_QUERY_KEY.all.concat(
      id !== undefined ? [id.toString()] : []
    ),
    queryFn: () =>
      id ? fetchAnnouncementById(id) : Promise.reject("ID is undefined"),
    enabled: id !== undefined,
  });

  return { announcement, isLoading, error };
};
