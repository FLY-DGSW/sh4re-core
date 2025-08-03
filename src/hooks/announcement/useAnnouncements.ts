import { useState, useMemo, useCallback } from "react";
import { announcements } from "@/constants/announcementData";

export const useAnnouncements = () => {
  const [openItemId, setOpenItemId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("date");
  const [showNoticesOnly, setShowNoticesOnly] = useState(false);
  const itemsPerPage = 10;

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
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      if (sortOrder === "title") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });

    return sorted;
  }, [searchTerm, sortOrder, showNoticesOnly]);

  const totalPages = Math.ceil(processedAnnouncements.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedAnnouncements = processedAnnouncements.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term);
    setCurrentPage(1);
  }, []);

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
    handleItemClick,
    setCurrentPage,
    handleSearch,
    handleSortChange,
    handleShowNoticesOnlyChange,
  };
};