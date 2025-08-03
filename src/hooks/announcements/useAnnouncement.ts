import { useMemo } from "react";
import { announcements } from "@/constants/announcementsData";

export const useAnnouncement = (id: number | undefined) => {
  const announcement = useMemo(() => {
    if (id === undefined) return undefined;
    return announcements.find((ann) => ann.id === id);
  }, [id]);

  return announcement;
};
