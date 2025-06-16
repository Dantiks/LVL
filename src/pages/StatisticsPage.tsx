import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

const StatisticsPage: React.FC = () => {
  // Здесь можно добавить логику и графики, пока заглушка

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" mb={3} textAlign="center">
        Статистика
      </Typography>
      <Paper sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="body1">
          Здесь будут отображаться статистические данные по потреблению калорий, трендам и т.д.
        </Typography>
      </Paper>
    </Container>
  );
};

export default StatisticsPage;
