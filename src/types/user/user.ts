// /users/me response용
export interface UserWithClassInfo {
  id: number;
  username: string;
  email: string;
  name: string;
  admissionYear: number;
  role: "STUDENT" | "TEACHER" | "ADMIN";
  theme: "DARK" | "LIGHT";
  grade: number;
  classNumber: number;
  studentNumber: number;
  school: {
    id: number;
    name: string;
    code: string;
  };
}

