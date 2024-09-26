import { create } from "zustand";

export const useToastStore = create((set) => ({
  toasts: [
    {
      id: crypto.randomUUID(),
      content: "hello world",
    },
  ],
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
      toasts: preState.toast.filter((toastItem) => toastItem.id !== id),
    })),
}));
