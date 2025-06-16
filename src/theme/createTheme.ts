import { createTheme as muiCreateTheme } from '@mui/material/styles';
import type { ThemeColors } from '../store/themeStore';

export const createTheme = (theme: ThemeColors) =>
  muiCreateTheme({
    palette: {
      mode: theme.mode,
      primary: {
        main: theme.primaryColor,
      },
      secondary: {
        main: theme.secondaryColor,
      },
    },
  });
