export interface Subject {
  id: number;
  name: string;
  description: string;
  schoolYear: number;
  grade: number;
  classNumber: number;
  userId: number;
}

export interface CreateSubjectReq {
  name: string;
  description: string;
  grade: number;
  classNumber: number;
  year: number;
}

export interface UpdateSubjectReq {
  id: number;
  name?: string;
  description?: string;
  grade?: number;
  classNumber?: number;
  year?: number;
}

export interface DeleteSubjectReq {
  id: number;
}

export interface SubjectsApiResponse {
  subjects: Subject[];
}