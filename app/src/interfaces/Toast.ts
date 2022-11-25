export interface ToastCssProps {
  theme: string;
  color?: string;
  borderBottomColor?: string;
}

export interface ToastOptions extends ToastCssProps {
  id?: string;
  title: string;
  content: string;
  duration?: number;
}

export interface ToastProps extends ToastCssProps {
  id: string;
  title: string;
  content: string;
  duration?: number;
  destroy: () => void;
}

export interface ToastContainerProps {
  theme: string;
  color: string;
  borderBottomColor: string;
}
