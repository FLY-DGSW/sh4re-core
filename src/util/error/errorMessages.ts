class ErrorMessages {
  loginError(status?: number): string {
    switch (status) {
      case 400:
        return "아이디 또는 비밀번호가 잘못되었습니다.";
      case 500:
        return "서버 오류가 발생하였습니다.";
      default:
        return "로그인에 실패하였습니다.";
    }
  }
}

export default new ErrorMessages();
