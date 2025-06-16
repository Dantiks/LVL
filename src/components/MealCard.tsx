import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface MealCardProps {
  title: string;
  calories: number;
}

const MealCard: React.FC<MealCardProps> = ({ title, calories }) => {
  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography color="text.secondary">{calories} ккал</Typography>
      </CardContent>
    </Card>
  );
};

export default MealCard;
