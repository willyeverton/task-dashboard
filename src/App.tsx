import React from 'react';
import TaskList from './components/TaskList.tsx';
import TaskForm from './components/TaskForm.tsx';
import { TaskProvider } from './context/TaskContext.tsx';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <TaskProvider>
        <TaskForm />
        <TaskList />
      </TaskProvider>
    </div>
  );
};

export default App;
