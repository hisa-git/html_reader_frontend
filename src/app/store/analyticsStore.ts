import { create } from "zustand";

interface ShowAdditionalState {
  showAdditionalComponents: boolean;
  hide: () => void;
  show: () => void;
}

export const useShowAdditionalComponents = create<ShowAdditionalState>((set) => ({
  showAdditionalComponents: true,
  hide: () => set({ showAdditionalComponents: false }),
  show: () => set({ showAdditionalComponents: true }),
}));
