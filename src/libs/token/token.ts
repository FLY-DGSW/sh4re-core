import { ACCESS_TOKEN_KEY } from "@/constants/token.constants";

class token {
  public getToken(key: string): string | null {
    return localStorage.getItem(key);
  }

  public setToken(key: string, token: string): void {
    localStorage.setItem(key, token);
  }

  public removeToken() {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
  }
}

export default new token();
