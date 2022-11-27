import { eye } from '../assets/icons';

export function revealPass(theme: string): string {
  if (theme === 'light') return eye.light.invisible.src;
  return eye.dark.invisible.src;
}

export function hidePass(theme: string): string {
  if (theme === 'light') return eye.light.visible.src;
  return eye.dark.visible.src;
}
