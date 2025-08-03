import { useState, useMemo, useCallback } from "react";
import { handouts } from "@/constants/handoutData";

export const useHandouts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("date");
  const itemsPerPage = 12;

  const processedHandouts = useMemo(() => {
    const filtered = handouts.filter((handout) =>
      handout.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sorted = [...filtered].sort((a, b) => {
      if (sortOrder === "date") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      if (sortOrder === "title") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });

    return sorted;
  }, [searchTerm, sortOrder]);

  const totalPages = Math.ceil(processedHandouts.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedHandouts = processedHandouts.slice(
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

  return {
    currentPage,
    sortOrder,
    totalPages,
    selectedHandouts,
    handleSearch,
    handleSortChange,
    setCurrentPage,
  };
};