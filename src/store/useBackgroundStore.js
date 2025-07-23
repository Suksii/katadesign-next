import create from "zustand";

export const useBackgroundStore = create((set) => ({
  bgColor: "bg-white",
  setBgColor: (color) => set({ bgColor: color }),
}));
