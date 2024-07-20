import React from 'react';
import { RouterProvider } from 'react-router-dom';
import AppRouter from './Router'; // Ensure this path is correct

function App() {
  return (
    <RouterProvider router={AppRouter()} />
  );
}

export default App;
