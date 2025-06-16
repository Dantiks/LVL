import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchMealById } from '../services/mealsAPI';
import type { Meal } from '../types';
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  CircularProgress,
  Box,
} from '@mui/material';

const MealDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [meal, setMeal] = useState<Meal | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetchMealById(id).then(data => {
        setMeal(data || null);
        setLoading(false);
      });
    }
  }, [id]);

  if (loading) {
    return (
      <Container sx={{ mt: 5, textAlign: 'center' }}>
        <CircularProgress />
      </Container>
    );
  }

  if (!meal) {
    return (
      <Container sx={{ mt: 5, textAlign: 'center' }}>
        <Typography variant="h6">Блюдо не найдено</Typography>
        <Button sx={{ mt: 2 }} variant="contained" onClick={() => navigate(-1)}>
          Назад
        </Button>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Button variant="outlined" onClick={() => navigate(-1)}>
        Назад
      </Button>
      <Card sx={{ mt: 3 }}>
        {meal.imageUrl && (
          <CardMedia
            component="img"
            height="300"
            image={meal.imageUrl}
            alt={meal.title}
          />
        )}
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {meal.title}
          </Typography>
          <Typography variant="body1">Калории: {meal.calories}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default MealDetailPage;
