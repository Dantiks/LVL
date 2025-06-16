import React from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Home as HomeIcon,
  Add as AddIcon,
  BarChart as ChartIcon,
  AccountCircle as ProfileIcon,
  People as UsersIcon
} from '@mui/icons-material';

const navItems = [
  { label: 'Сегодня', value: '/today', icon: <HomeIcon /> },
  { label: 'Добавить', value: '/add', icon: <AddIcon /> },
  { label: 'Статистика', value: '/statistics', icon: <ChartIcon /> },
  { label: 'Профиль', value: '/profile', icon: <ProfileIcon /> },
  { label: 'Пользователи', value: '/users', icon: <UsersIcon /> },
];

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        value={location.pathname}
        onChange={(_, newValue) => navigate(newValue)}
        showLabels
      >
        {navItems.map((item) => (
          <BottomNavigationAction
            key={item.value}
            label={item.label}
            value={item.value}
            icon={item.icon}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
};

export default Navigation;
