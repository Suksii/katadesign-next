import { create } from "zustand";

export const useMenuStore = create((set) => ({
  isOpen: false,
  setIsOpen: (value) => set({ isOpen: value }),
}));
