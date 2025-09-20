import { create } from 'zustand'

export const useShowAdditionalComponents = create((set) => ({
  showAdditionalComponents: true,
  hide: () => set({ showAdditionalComponents: false }),
  show: () => set({ showAdditionalComponents: true }),
}))
