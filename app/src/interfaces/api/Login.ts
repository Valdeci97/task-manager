export interface Login {
  login: {
    user: { id: string; name: string; email: string };
    token: { token: string };
  };
  message?: string;
}
