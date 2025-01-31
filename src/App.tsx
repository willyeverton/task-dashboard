import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CircularProgress, Box } from '@mui/material';
import './App.css';
import { ErrorBoundary } from './components/ErrorBoundary';
import { TaskProvider } from 'context/TaskContext';

// Lazy loaded components
const Chart = lazy(() => import('./pages/Chart'));
const TaskList = lazy(() => import('./pages/TaskList'));

// Loading component
const LoadingFallback = () => (
  <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
    <CircularProgress />
  </Box>
);

function App() {
  return (
    <ErrorBoundary>
      <TaskProvider>
        <BrowserRouter>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/chart" element={<Chart />} />
              <Route path="/" element={<TaskList />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TaskProvider>
    </ErrorBoundary>
  );
}

export default App;
