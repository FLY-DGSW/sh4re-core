import { ACCESS_TOKEN_KEY } from "@/constants/token.constants";
import token from "@/libs/token/token";
import axios, { AxiosInstance } from "axios";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const sh4reCustomAxios: AxiosInstance = axios.create({
  baseURL: SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

sh4reCustomAxios.interceptors.request.use((config) => {
  const accessToken = token.getToken(ACCESS_TOKEN_KEY);
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  } // 토큰 있으면 header에 넣기
  return config;
});

// 토큰으로 보낸 요청에서 만료됐으면 refresh
sh4reCustomAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const isUnauthorized = error.response?.status === 401;
    const hasNotRetried = !originalRequest._retry;

    if (isUnauthorized && hasNotRetried) {
      originalRequest._retry = true;

      try {
        const res = await axios.post(`${SERVER_URL}/api/auth/refresh`, null, {
          withCredentials: true,
        });

        const { accessToken } = res.data.data;
        token.setToken(ACCESS_TOKEN_KEY, accessToken);

        originalRequest.headers = {
          ...originalRequest.headers,
          Authorization: `Bearer ${accessToken}`,
        };

        return sh4reCustomAxios(originalRequest);
      } catch (refreshError) {
        token.removeToken();
        alert("세션이 만료되었습니다. 다시 로그인해주세요.");
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default sh4reCustomAxios;
