import { useState, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { chapters } from "@/constants/assignmentData";
import {
  calculateProgress,
  processChapters,
} from "@/util/math/assignmentUtils";
import { Assignment } from "@/types/assignment/assignment";

export const useAssignments = () => {
  const navigate = useNavigate();
  const [openChapterId, setOpenChapterId] = useState<number | null>(null);
  const [openAssignmentId, setOpenAssignmentId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("date");
  const itemPerPage = 5;

  const handleChapterClick = (id: number) => {
    setOpenChapterId(openChapterId === id ? null : id);
    setOpenAssignmentId(null);
  };

  const handleAssignmentClick = (assignment: Assignment) => {
    navigate(`/assignments/${assignment.id}`);
  };

  const processedChapters = useMemo(
    () => processChapters(chapters, searchTerm, sortOrder),
    [searchTerm, sortOrder]
  );

  const totalPages = Math.ceil(processedChapters.length / itemPerPage);
  const startIndex = (currentPage - 1) * itemPerPage;
  const selectedChapters = processedChapters.slice(
    startIndex,
    startIndex + itemPerPage
  );

  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term);
    setCurrentPage(1);
  }, []);

  const handleSortChange = useCallback((order: string) => {
    setSortOrder(order);
    setCurrentPage(1);
  }, []);

  const memoizedCalculateProgress = useCallback(calculateProgress, []);

  return {
    openChapterId,
    openAssignmentId,
    currentPage,
    searchTerm,
    sortOrder,
    totalPages,
    selectedChapters,
    processedChapters,
    handleChapterClick,
    handleAssignmentClick,
    handleSearch,
    handleSortChange,
    memoizedCalculateProgress,
    setCurrentPage,
  };
};
