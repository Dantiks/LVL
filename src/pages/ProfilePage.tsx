import React from 'react';
import { Container, Typography, Paper, Button } from '@mui/material';
import { useAppStore } from '../store/appStore';
import { logout } from '../services/auth';
import { useNavigate } from 'react-router-dom';

const ProfilePage: React.FC = () => {
  const user = useAppStore(state => state.user);
  const setUser = useAppStore(state => state.setUser);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    setUser(null);
    navigate('/auth');
  };

  if (!user) {
    return (
      <Container sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="h6">Пользователь не авторизован</Typography>
        <Button variant="contained" onClick={() => navigate('/auth')} sx={{ mt: 2 }}>
          Войти
        </Button>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Профиль пользователя
        </Typography>
        <Typography variant="body1">
          Имя: {user.name}
        </Typography>
        <Typography variant="body1">
          Email: {user.email}
        </Typography>
        <Button variant="contained" sx={{ mt: 3 }} onClick={handleLogout}>
          Выйти
        </Button>
      </Paper>
    </Container>
  );
};

export default ProfilePage;
