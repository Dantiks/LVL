import React from 'react';
import { Box, TextField } from '@mui/material';

interface ColorPickerProps {
  label: string;
  value: string;
  onChange: (newColor: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ label, value, onChange }) => {
  return (
    <Box display="flex" alignItems="center" gap={2}>
      <TextField
        type="color"
        label={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        InputLabelProps={{ shrink: true }}
        variant="outlined"
      />
      <Box
        width={24}
        height={24}
        bgcolor={value}
        border="1px solid #ccc"
        borderRadius="50%"
      />
    </Box>
  );
};

export default ColorPicker;
