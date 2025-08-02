import { ACCESS_TOKEN_KEY } from "@/constants/token.constants";
import token from "@/libs/token/token";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const accessToken = token.getToken(ACCESS_TOKEN_KEY);
  return accessToken ? <Outlet /> : <Navigate to='/login' replace />;
}
