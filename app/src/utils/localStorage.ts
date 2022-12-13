import { UserFilter, UserInfo, UserPreferences } from '../interfaces/User';

function setupUser(value: UserInfo): void {
  localStorage.setItem('user', JSON.stringify(value));
}

function setUserPreferences(value: UserPreferences): void {
  localStorage.setItem('preferences', JSON.stringify(value));
}

function setUserFilter(value: UserFilter): void {
  localStorage.setItem('filter', JSON.stringify(value));
}

function getUserToken(): string {
  const local = localStorage.getItem('user');
  if (!local) return 'inválido';
  const user = JSON.parse(local);
  return user.token;
}

function getTheme(): string {
  const local = localStorage.getItem('preferences');
  if (!local) return 'light';
  const preferences = JSON.parse(local);
  return preferences.theme;
}

function getUserId(): string {
  const local = localStorage.getItem('user');
  if (!local) return 'inválido';
  const user = JSON.parse(local);
  return user.id;
}

function getUserFilter(): string {
  const local = localStorage.getItem('filter');
  if (!local) return 'Todas';
  const filter = JSON.parse(local);
  return filter.isActive;
}

function getUsername(): string {
  const local = localStorage.getItem('user');
  if (!local) return 'Usuário';
  const user = JSON.parse(local);
  return user.name;
}

function reset(): void {
  localStorage.removeItem('user');
  localStorage.removeItem('filter');
}

export const storageHandler = {
  setupUser,
  setUserPreferences,
  setUserFilter,
  getUserToken,
  getUserId,
  getTheme,
  getUserFilter,
  getUsername,
  reset,
};
