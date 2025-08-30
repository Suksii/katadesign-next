import { create } from "zustand";

export const useProjectStore = create((set) => ({
  isProjectOpened: false,
  setIsProjectOpened: (value) => set({ isProjectOpened: value }),
}));
