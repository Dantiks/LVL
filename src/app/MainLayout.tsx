import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';

const MainLayout: React.FC = () => {
  return (
    <>
      <Navigation />
      <main style={{ padding: '16px' }}>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
