import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useThemeStore } from './store/themeStore';
import { createTheme } from './theme/createTheme';

const Root = () => {
  const themeConfig = useThemeStore((state) => state.theme);
  const muiTheme = createTheme(themeConfig);

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<Root />);
