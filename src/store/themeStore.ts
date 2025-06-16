import { create } from 'zustand';

export type ThemeMode = 'light' | 'dark';

export type ThemeColors = {
  primaryColor: string;
  secondaryColor: string;
  mode: ThemeMode;
};

type ThemeStore = {
  theme: ThemeColors;
  setTheme: (theme: ThemeColors) => void;
};

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: {
    primaryColor: '#1976d2',  // Синий по умолчанию
    secondaryColor: '#9c27b0', // Фиолетовый по умолчанию
    mode: 'light',
  },
  setTheme: (theme) => set({ theme }),
}));
