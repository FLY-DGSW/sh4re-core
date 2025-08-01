class token {
  public getToken(key: string): string | null {
    return localStorage.getItem(key);
  }

  public setToken(key: string, token: string): void {
    localStorage.setItem(key, token);
  }

  public removeToken() {
    localStorage.removeItem("accessToken");
  }
}

export default new token();
