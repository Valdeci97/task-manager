export interface Login {
  login: {
    user: { id: string; name: string; email: string };
    token: string;
  };
  message?: string;
}
