import { useEffect } from 'react';
import { ToastProps } from '../interfaces/Toast';
import { ST } from '../styles/toast';

export default function Toast({
  title,
  content,
  duration,
  destroy,
  theme,
  color,
  borderBottomColor,
}: ToastProps) {
  useEffect(() => {
    if (!duration) return;
    const timer = setTimeout(() => {
      destroy();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, destroy]);

  if (!color) color = '';
  if (!borderBottomColor) borderBottomColor = '';

  return (
    <ST.Container
      theme={theme}
      color={color}
      borderBottomColor={borderBottomColor}
    >
      <ST.Header>
        <span>{title}</span>
        <ST.Button type="button" onClick={() => destroy()} color={color}>
          X
        </ST.Button>
      </ST.Header>
      <div>{content}</div>
    </ST.Container>
  );
}
