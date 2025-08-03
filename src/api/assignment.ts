import sh4reCustomAxios from "./sh4reCustomAxios";
import { Chapter } from "@/types/assignment/assignment";

// 과제 목록 전체 조회
export const getAssignments = async (): Promise<Chapter[]> => {
  try {
    const response = await sh4reCustomAxios.get<Chapter[]>("/assignments");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch assignments:", error);
    throw new Error("Failed to fetch assignments");
  }
};

// 특정 과제 조회
export const getAssignmentById = async (assignmentId: string) => {
  try {
    const response = await sh4reCustomAxios.get(`/assignments/${assignmentId}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch assignment ${assignmentId}:`, error);
    throw new Error(`Failed to fetch assignment ${assignmentId}`);
  }
};
