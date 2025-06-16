// Тип блюда
export type Meal = {
    id: string;
    title: string;
    calories: number;
    imageUrl?: string;
  };
  
  // Тип еды, добавленной за день (может ссылаться на Meal или быть отдельной)
  export type TodayFood = {
    id: string;
    mealId: string;
    quantity: number;
    addedAt: string; // ISO string
  };
  
  // Тип пользователя
  export type User = {
    id: string;
    email: string;
    name: string;
    password: string;
  };
  
  // Цветовая тема
  export type ThemeMode = 'light' | 'dark';
  
  export type ThemeColors = {
    primaryColor: string;
    secondaryColor: string;
    mode: ThemeMode;
  };
  