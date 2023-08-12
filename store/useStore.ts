import { create } from "zustand";

interface IStore {
  user?: any;
  setUser: (value: any) => void;
}

export const useStore = create<IStore>((set) => ({
  user: {},
  setUser: (value) => set((state) => ({ ...state, user: value })),
}));
