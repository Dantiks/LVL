import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Paper } from '@mui/material';
import type { Meal } from '../types';
import { fetchMeals } from '../services/mealsAPI';

const TodayFoodsPage: React.FC = () => {
  const [todayMeals, setTodayMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMeals().then(data => {
      // Пока для примера берем все блюда как сегодняшние
      setTodayMeals(data);
      setLoading(false);
    });
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" mb={3} textAlign="center">
        Сегодня съедено
      </Typography>
      <Paper>
        {loading ? (
          <Typography p={2} textAlign="center">
            Загрузка...
          </Typography>
        ) : todayMeals.length === 0 ? (
          <Typography p={2} textAlign="center">
            Нет записей
          </Typography>
        ) : (
          <List>
            {todayMeals.map(meal => (
              <ListItem key={meal.id}>
                <ListItemText
                  primary={meal.title}
                  secondary={`Калории: ${meal.calories}`}
                />
              </ListItem>
            ))}
          </List>
        )}
      </Paper>
    </Container>
  );
};

export default TodayFoodsPage;
