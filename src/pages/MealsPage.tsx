import React, { useEffect, useState } from 'react';
import { fetchMeals } from '../services/mealsAPI';
import type { Meal } from '../types';
import { Container, Grid, Typography, CircularProgress } from '@mui/material';
import MealCard from '../components/MealCard';

const MealsPage: React.FC = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMeals().then(data => {
      setMeals(data);
      setLoading(false);
    });
  }, []);

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" mb={3} textAlign="center">
        Все блюда
      </Typography>

      {loading ? (
        <Grid container justifyContent="center">
          <CircularProgress />
        </Grid>
      ) : (
        <Grid container spacing={3}>
          {meals.map(meal => (
            <Grid item xs={12} sm={6} md={4} key={meal.id}>
              <MealCard meal={meal} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default MealsPage;
