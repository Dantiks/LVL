import React from 'react';
import { Box, FormControlLabel, Switch, Typography } from '@mui/material';
import ColorPicker from './ColorPicker';
import { useThemeStore } from '../store/themeStore';

const ThemeCustomizer: React.FC = () => {
  const { theme, setTheme } = useThemeStore();

  const handleColorChange = (key: 'primaryColor' | 'secondaryColor', value: string) => {
    setTheme({ ...theme, [key]: value });
  };

  const toggleMode = () => {
    setTheme({ ...theme, mode: theme.mode === 'light' ? 'dark' : 'light' });
  };

  return (
    <Box p={2}>
      <Typography variant="h6">Настройка темы</Typography>
      <FormControlLabel
        control={<Switch checked={theme.mode === 'dark'} onChange={toggleMode} />}
        label="Тёмная тема"
      />
      <Box mt={2}>
        <ColorPicker
          label="Primary Color"
          value={theme.primaryColor}
          onChange={(color) => handleColorChange('primaryColor', color)}
        />
      </Box>
      <Box mt={2}>
        <ColorPicker
          label="Secondary Color"
          value={theme.secondaryColor}
          onChange={(color) => handleColorChange('secondaryColor', color)}
        />
      </Box>
    </Box>
  );
};

export default ThemeCustomizer;
