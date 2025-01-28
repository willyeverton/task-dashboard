import React from 'react';
import TaskList from './components/TaskList';
import { TaskProvider } from './context/TaskContext';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <TaskProvider>
        <TaskList />
      </TaskProvider>
    </div>
  );
};

export default App;
