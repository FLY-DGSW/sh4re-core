import { useState, useMemo } from "react";
import type { CodeType } from "@/types/code/code";

interface FilterOptions {
  value: string;
  label: string;
}

export interface CodeFilters {
  searchTerm: string;
  sortOrder: string;
  selectedClass: string;
  selectedAssignment: string;
}

export interface UseCodeFiltersReturn {
  filteredCodes: CodeType[];
  filters: CodeFilters;
  setSearchTerm: (term: string) => void;
  setSortOrder: (order: string) => void;
  setSelectedClass: (className: string) => void;
  setSelectedAssignment: (assignment: string) => void;
  sortOrderOptions: FilterOptions[];
  classOptions: FilterOptions[];
  assignmentOptions: FilterOptions[];
}

export const useCodeFilters = (
  codes: CodeType[] = []
): UseCodeFiltersReturn => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("latest");
  const [selectedClass, setSelectedClass] = useState("all");
  const [selectedAssignment, setSelectedAssignment] = useState("all");

  const sortOrderOptions = useMemo(
    () => [
      { value: "latest", label: "최신순" },
      { value: "likes", label: "좋아요순" },
    ],
    []
  );

  const safeCodesArray = useMemo(() => codes || [], [codes]);

  const classOptions = useMemo(() => {
    const uniqueClasses = Array.from(
      new Set(safeCodesArray.map((code) => code.className).filter(Boolean))
    );

    return [
      { value: "all", label: "전체 반" },
      ...uniqueClasses.map((className) => ({
        value: className,
        label: className,
      })),
    ];
  }, [safeCodesArray]);

  const assignmentOptions = useMemo(() => {
    const uniqueAssignments = Array.from(
      new Set(safeCodesArray.map((code) => code.assignment))
    ).filter(Boolean);

    return [
      { value: "all", label: "전체 과제" },
      ...uniqueAssignments.map((assignment) => ({
        value: assignment as string,
        label: assignment as string,
      })),
    ];
  }, [safeCodesArray]);

  const filteredCodes = useMemo(() => {
    return safeCodesArray
      .filter((code) => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        return (
          code.title.toLowerCase().includes(lowerCaseSearchTerm) ||
          code.code.toLowerCase().includes(lowerCaseSearchTerm) ||
          (code.description &&
            code.description.toLowerCase().includes(lowerCaseSearchTerm)) ||
          code.student.toLowerCase().includes(lowerCaseSearchTerm)
        );
      })
      .filter(
        (code) => selectedClass === "all" || code.className === selectedClass
      )
      .filter(
        (code) =>
          selectedAssignment === "all" || code.assignment === selectedAssignment
      )
      .sort((a, b) => {
        if (sortOrder === "latest") {
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        } else {
          return (b.likeCount || 0) - (a.likeCount || 0);
        }
      });
  }, [
    safeCodesArray,
    searchTerm,
    selectedClass,
    selectedAssignment,
    sortOrder,
  ]);

  return {
    filteredCodes,
    filters: {
      searchTerm,
      sortOrder,
      selectedClass,
      selectedAssignment,
    },
    setSearchTerm,
    setSortOrder,
    setSelectedClass,
    setSelectedAssignment,
    sortOrderOptions,
    classOptions,
    assignmentOptions,
  };
};
