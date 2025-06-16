import React, { useState } from 'react';
import { addMeal } from '../services/mealsAPI';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Box,
} from '@mui/material';

const AddFoodPage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [calories, setCalories] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleAdd = async () => {
    setError('');
    if (!title || !calories) {
      setError('Пожалуйста, заполните обязательные поля');
      return;
    }
    const caloriesNum = Number(calories);
    if (isNaN(caloriesNum) || caloriesNum <= 0) {
      setError('Калории должны быть положительным числом');
      return;
    }

    try {
      await addMeal({ title, calories: caloriesNum, imageUrl });
      navigate('/');
    } catch {
      setError('Ошибка при добавлении блюда');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" mb={3}>
          Добавить новое блюдо
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <TextField
            label="Название"
            fullWidth
            margin="normal"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
          <TextField
            label="Калории"
            fullWidth
            margin="normal"
            value={calories}
            onChange={e => setCalories(e.target.value)}
            required
          />
          <TextField
            label="URL изображения"
            fullWidth
            margin="normal"
            value={imageUrl}
            onChange={e => setImageUrl(e.target.value)}
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
            onClick={handleAdd}
          >
            Добавить
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default AddFoodPage;
