import React from 'react';
import TaskList from './components/Task/TaskList';
import { TaskProvider } from './context/TaskContext';
import './App.css';
import { ErrorBoundary } from './components/ErrorBoundary';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <div className="app">
        <TaskProvider>
          <TaskList />
        </TaskProvider>
      </div>
    </ErrorBoundary>
  );
};


export default App;
