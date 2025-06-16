import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';
import { login, register } from '../services/auth';
import { useAppStore } from '../store/appStore';

const AuthPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState('');
  const setUser = useAppStore(state => state.setUser);

  const handleSubmit = async () => {
    setError('');
    try {
      const user = isRegister
        ? await register(email, password, name)
        : await login(email, password);
      setUser(user);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
      <Paper sx={{ p: 4, width: 400 }}>
        <Typography variant="h4" mb={2} textAlign="center">
          {isRegister ? 'Регистрация' : 'Вход'}
        </Typography>
        {isRegister && (
          <TextField
            label="Имя"
            fullWidth
            margin="normal"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        )}
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
          label="Пароль"
          fullWidth
          margin="normal"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {error && (
          <Typography color="error" sx={{ mt: 1 }}>
            {error}
          </Typography>
        )}
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 3 }}
          onClick={handleSubmit}
        >
          {isRegister ? 'Зарегистрироваться' : 'Войти'}
        </Button>
        <Button
          fullWidth
          sx={{ mt: 1 }}
          onClick={() => setIsRegister(!isRegister)}
        >
          {isRegister
            ? 'Уже есть аккаунт? Войти'
            : 'Нет аккаунта? Зарегистрируйтесь'}
        </Button>
      </Paper>
    </Box>
  );
};

export default AuthPage;
