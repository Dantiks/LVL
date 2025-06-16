import { create } from 'zustand';
import type { User } from '../types';

type AppState = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const useAppStore = create<AppState>(set => ({
  user: null,
  setUser: (user) => set({ user }),
}));
