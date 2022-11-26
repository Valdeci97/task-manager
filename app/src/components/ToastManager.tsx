import { createRoot, Root } from 'react-dom/client';
import { ToastOptions, ToastProps } from '../interfaces/Toast';
import Toast from './Toast';

class ToastManager {
  private root: Root;
  private toasts: ToastProps[] = [];
  private colors = {
    success: '#5E9E57',
    error: '#F72626',
    warn: '#FF871F',
  };

  constructor(bottom = '10vh', rigth = '5%', width = '15rem') {
    const [body] = document.getElementsByTagName('body');
    const toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.style.alignItems = 'center';
    toastContainer.style.bottom = bottom;
    toastContainer.style.display = 'flex';
    toastContainer.style.flexDirection = 'column';
    toastContainer.style.position = 'fixed';
    toastContainer.style.right = rigth;
    toastContainer.style.width = width;
    toastContainer.style.zIndex = '10';
    body.insertAdjacentElement('beforeend', toastContainer);
    this.root = createRoot(toastContainer);
  }

  public customToast(options: ToastOptions): void {
    const toastId = this.generateId();
    const toast = {
      id: toastId,
      ...options,
      destroy: () => this.destroy(options.id ?? toastId),
    };
    this.toasts = [toast, ...this.toasts];
    this.render();
  }

  public success(options: ToastOptions): void {
    const toastId = this.generateId();
    const toast = {
      id: toastId,
      color: this.colors.success,
      borderBottomColor: this.colors.success,
      ...options,
      destroy: () => this.destroy(options.id ?? toastId),
    };
    this.toasts = [toast, ...this.toasts];
    this.render();
  }

  public error(options: ToastOptions): void {
    const toastId = this.generateId();
    const toast = {
      id: toastId,
      color: this.colors.error,
      borderBottomColor: this.colors.error,
      ...options,
      destroy: () => this.destroy(options.id ?? toastId),
    };
    this.toasts = [toast, ...this.toasts];
    this.render();
  }

  public warn(options: ToastOptions): void {
    const toastId = this.generateId();
    const toast = {
      id: toastId,
      color: this.colors.warn,
      borderBottomColor: this.colors.warn,
      ...options,
      destroy: () => this.destroy(options.id ?? toastId),
    };
    this.toasts = [toast, ...this.toasts];
    this.render();
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2, 9);
  }

  private destroy(id: string): void {
    this.toasts = this.toasts.filter((toast) => toast.id !== id);
    this.render();
  }

  private render(): void {
    const toastList = this.toasts.map((toast) => {
      return <Toast key={toast.id} {...toast} />;
    });
    this.root.render(toastList);
  }
}

export const toast = new ToastManager();
