import React from 'react'; 
import { StrictMode, useEffect, useState, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import router from './Router/Router.jsx';
import { Toaster } from 'react-hot-toast';
import LoadingPage from './Page/Home/LoadingPage.jsx';

function MainApp() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoader(false);
    }, 2500); // 2.5 second delay

    return () => clearTimeout(timeout);
  }, []);

  if (showLoader) {
    return <LoadingPage />;
  }

  return (
    <Suspense fallback={<LoadingPage />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainApp />
    <Toaster />
  </StrictMode>
);
