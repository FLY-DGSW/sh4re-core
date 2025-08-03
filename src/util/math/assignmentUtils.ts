import { Assignment, Chapter } from "@/types/assignment/assignment";

export const calculateProgress = (assignments: Assignment[]) => {
  const completedCount = assignments.filter(
    (assignment) => assignment.label === "제출됨"
  ).length;
  const totalCount = assignments.length;
  const percentage =
    totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return {
    completed: completedCount,
    total: totalCount,
    percentage,
  };
};

export const processChapters = (
  chapters: Chapter[],
  searchTerm: string,
  sortOrder: string
) => {
  const filteredChapters = chapters.filter((chapter) => {
    if (!searchTerm) return true;

    const term = searchTerm.toLowerCase();
    const chapterMatch =
      chapter.title.toLowerCase().includes(term) ||
      chapter.description.toLowerCase().includes(term);

    const assignmentMatch = chapter.assignments.some(
      (assignment) =>
        assignment.title.toLowerCase().includes(term) ||
        assignment.content?.toLowerCase().includes(term) ||
        assignment.author.toLowerCase().includes(term)
    );

    return chapterMatch || assignmentMatch;
  });

  const chaptersWithSortedAssignments = filteredChapters.map((chapter) => ({
    ...chapter,
    assignments: [...chapter.assignments].sort((a, b) => {
      if (sortOrder === "date") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      if (sortOrder === "title") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    }),
  }));

  return chaptersWithSortedAssignments;
};
