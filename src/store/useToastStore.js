import { create } from "zustand";

export const useToastStore = create((set) => ({
  toasts: [],
  addToast: (content) => {
    const newToast = {
      id: crypto.randomUUID(),
      content,
    };
    set((preState) => ({
      toasts: [...preState.toasts, newToast],
    }));
  },
  removeToast: (id) =>
    set((preState) => ({
      toasts: preState.toasts.filter((toastItem) => toastItem.id !== id),
    })),
}));
