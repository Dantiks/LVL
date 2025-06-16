import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './MainLayout';
import AuthPage from '../pages/AuthPage';
import MealsPage from '../pages/MealsPage';
import MealDetailPage from '../pages/MealDetailPage';
import AddFoodPage from '../pages/AddFoodPage';
import TodayFoodsPage from '../pages/TodayFoodsPage';
import StatisticsPage from '../pages/StatisticsPage';
import ProfilePage from '../pages/ProfilePage';
import UsersPage from '../pages/UsersPage';
import UserProfilePage from '../pages/UserProfilePage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MealsPage />} />
          <Route path="auth" element={<AuthPage />} />
          <Route path="meals/:id" element={<MealDetailPage />} />
          <Route path="add" element={<AddFoodPage />} />
          <Route path="today" element={<TodayFoodsPage />} />
          <Route path="statistics" element={<StatisticsPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="users/:id" element={<UserProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
