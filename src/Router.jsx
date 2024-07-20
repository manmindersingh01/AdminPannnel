import React, { useState, useEffect } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Events from './pages/Events';
import PageText from './pages/PageText';
import FrequentEvents from './pages/FrequentEvents';
import Layout from './components/Layout';
import { auth } from './config/firebase';
import { onAuthStateChanged } from 'firebase/auth';

// Define the authentication state hook
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });

    // Clean up the subscription on unmount
    return () => unsubscribe();
  }, []);

  return isAuthenticated;
};

// Create the router configuration
const AppRouter = () => {
  const isAuthenticated = useAuth();

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
      index: true,
    },
    {
      element: <Layout isAuthenticated={isAuthenticated} />,
      children: [
        {
          path: '/dashboard',
          element: isAuthenticated ? <Dashboard /> : <Login />,
        },
        {
          path: '/events',
          element: isAuthenticated ? <Events /> : <Login />,
        },
        {
          path: '/pagetext',
          element: isAuthenticated ? <PageText /> : <Login />,
        },
        {
          path: '/frequentevents',
          element: isAuthenticated ? <FrequentEvents /> : <Login />,
        },
      ],
    },
    {
      path: '*',
      element: <p>404 Error - Nothing here...</p>,
    },
  ]);

  return router;
};

export default AppRouter;
