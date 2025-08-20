import type { Subject } from "@/types/subject/subject";

export interface Unit {
  id: number;
  title: string;
  description?: string;
  orderIndex: number;
  subject: Subject;
  userId: number;
}

export interface CreateUnitReq {
  subjectId: number;
  title: string;
  description?: string;
  orderIndex: number;
}

export interface UpdateUnitReq {
  id: number;
  title: string;
  description?: string;
  orderIndex: number;
}

export interface DeleteUnitReq {
  id: number;
}

export interface UnitsApiResponse {
  units: Unit[];
}

export interface UnitApiResponse {
  unit: Unit;
}