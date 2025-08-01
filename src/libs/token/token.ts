class Token {
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
const token = new Token();

export default token;
