import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Paper, Button } from '@mui/material';

// Заглушка данных пользователей
const users = [
  { id: '1', name: 'Иван Иванов', email: 'ivan@mail.com' },
  { id: '2', name: 'Мария Петрова', email: 'maria@mail.com' },
  { id: '3', name: 'Алексей Смирнов', email: 'alex@mail.com' },
];

const UserProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const user = users.find(u => u.id === id);

  if (!user) {
    return (
      <Container sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="h6">Пользователь не найден</Typography>
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
      <Paper sx={{ p: 4, mt: 2 }}>
        <Typography variant="h4" gutterBottom>
          Профиль пользователя
        </Typography>
        <Typography variant="body1">
          Имя: {user.name}
        </Typography>
        <Typography variant="body1">
          Email: {user.email}
        </Typography>
      </Paper>
    </Container>
  );
};

export default UserProfilePage;
