import React from 'react';
import { Container, Typography, List, ListItemButton, ListItemText, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Заглушка списка пользователей
const users = [
  { id: '1', name: 'Иван Иванов', email: 'ivan@mail.com' },
  { id: '2', name: 'Мария Петрова', email: 'maria@mail.com' },
  { id: '3', name: 'Алексей Смирнов', email: 'alex@mail.com' },
];

const UsersPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" mb={3} textAlign="center">
        Все пользователи
      </Typography>
      <Paper>
        <List>
          {users.map(user => (
            <ListItemButton
              key={user.id}
              onClick={() => navigate(`/users/${user.id}`)}
            >
              <ListItemText primary={user.name} secondary={user.email} />
            </ListItemButton>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default UsersPage;
