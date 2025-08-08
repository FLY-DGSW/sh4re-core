import { useState, useMemo, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import sh4reCustomAxios from "@/api/sh4reCustomAxios";
import {
  Announcement,
  AnnouncementsApiResponse,
} from "@/types/announcements/announcements";
import { ANNOUNCEMENTS_QUERY_KEY } from "@/constants/queryKeys";

const fetchAnnouncements = async (): Promise<Announcement[]> => {
  const res = await sh4reCustomAxios.get<AnnouncementsApiResponse>(
    "/announcements"
  );
  return res.data.data.announcements;
};

export const useAnnouncements = (searchTerm: string) => {
  const [openItemId, setOpenItemId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("date");
  const [showNoticesOnly, setShowNoticesOnly] = useState(false);
  const itemsPerPage = 10;

  const {
    data: announcements = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ANNOUNCEMENTS_QUERY_KEY.all,
    queryFn: fetchAnnouncements,
  });

  const handleItemClick = (id: number) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  const processedAnnouncements = useMemo(() => {
    const filteredBySearch = announcements.filter((announcement) => {
      const term = searchTerm.toLowerCase();
      return (
        announcement.title.toLowerCase().includes(term) ||
        announcement.content?.toLowerCase().includes(term) ||
        announcement.author.toLowerCase().includes(term)
      );
    });

    const filteredByLabel = showNoticesOnly
      ? filteredBySearch.filter((announcement) => announcement.label === "공지")
      : filteredBySearch;

    const sorted = [...filteredByLabel].sort((a, b) => {
      if (sortOrder === "date") {
        const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
        const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
        return dateB - dateA;
      }
      if (sortOrder === "title") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });

    return sorted;
  }, [searchTerm, sortOrder, showNoticesOnly, announcements]);

  const totalPages = Math.ceil(processedAnnouncements.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedAnnouncements = processedAnnouncements.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleSortChange = useCallback((order: string) => {
    setSortOrder(order);
    setCurrentPage(1);
  }, []);

  const handleShowNoticesOnlyChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setShowNoticesOnly(e.target.checked);
      setCurrentPage(1);
    },
    []
  );

  return {
    openItemId,
    currentPage,
    sortOrder,
    showNoticesOnly,
    totalPages,
    selectedAnnouncements,
    isLoading,
    error,
    handleItemClick,
    setCurrentPage,
    handleSortChange,
    handleShowNoticesOnlyChange,
  };
};
