export interface UserLogin {
  email: string;
  password: string;
}

export interface CreateUser {
  name: string;
  email: string;
  password: string;
}

export interface UserInfo {
  token: string;
  id: string;
  name: string;
}

export interface UserPreferences {
  theme: string;
}

export interface UserFilter {
  isActive: string;
}
