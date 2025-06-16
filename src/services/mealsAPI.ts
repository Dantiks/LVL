import type { Meal } from '../types';

let meals: Meal[] = [
  { id: '1', title: 'Салат Цезарь', calories: 250, imageUrl: '' },
  { id: '2', title: 'Куриная грудка', calories: 300, imageUrl: '' },
];

// Получить все блюда
export const fetchMeals = async (): Promise<Meal[]> => {
  return new Promise(resolve => setTimeout(() => resolve(meals), 500));
};

// Получить блюдо по id
export const fetchMealById = async (id: string): Promise<Meal | undefined> => {
  return new Promise(resolve => setTimeout(() => resolve(meals.find(m => m.id === id)), 500));
};

// Добавить новое блюдо
export const addMeal = async (meal: Omit<Meal, 'id'>): Promise<Meal> => {
  const newMeal: Meal = {
    id: Date.now().toString(),
    ...meal,
  };
  meals.push(newMeal);
  return new Promise(resolve => setTimeout(() => resolve(newMeal), 500));
};

// Обновить блюдо
export const updateMeal = async (id: string, updatedFields: Partial<Omit<Meal, 'id'>>): Promise<Meal | undefined> => {
  const index = meals.findIndex(m => m.id === id);
  if (index === -1) return undefined;

  meals[index] = { ...meals[index], ...updatedFields };
  return new Promise(resolve => setTimeout(() => resolve(meals[index]), 500));
};

// Удалить блюдо
export const deleteMeal = async (id: string): Promise<boolean> => {
  const initialLength = meals.length;
  meals = meals.filter(m => m.id !== id);
  return new Promise(resolve => setTimeout(() => resolve(meals.length < initialLength), 500));
};
