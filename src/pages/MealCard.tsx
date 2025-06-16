import React from 'react';
import type { Meal } from '../types';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

interface MealCardProps {
  meal: Meal;
}

const MealCard: React.FC<MealCardProps> = ({ meal }) => {
  return (
    <Card>
      {meal.imageUrl && (
        <CardMedia
          component="img"
          height="140"
          image={meal.imageUrl}
          alt={meal.title}
        />
      )}
      <CardContent>
        <Typography variant="h6" component="div">
          {meal.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Калории: {meal.calories}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MealCard;
