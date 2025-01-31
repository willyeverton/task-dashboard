import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Chart } from 'pages/Chart';
import './App.css';
import { ErrorBoundary } from './components/ErrorBoundary';
import { TaskProvider } from 'context/TaskContext';
import TaskList from 'pages/TaskList';

function App() {
  return (
    <ErrorBoundary>
      <TaskProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/chart" element={<Chart />} />
            <Route path="/" element={<TaskList />} />
          </Routes>
        </BrowserRouter>
      </TaskProvider>
    </ErrorBoundary>
  );
}

export default App;
