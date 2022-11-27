export interface HttpException {
  message?: string;
}

export interface Login extends HttpException {
  login: {
    user: { id: string; name: string; email: string };
    token: string;
  };
}
