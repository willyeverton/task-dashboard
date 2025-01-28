import React from 'react';
import TaskList from './components/TaskList.tsx';
import TaskForm from './components/TaskForm.tsx';
import { TaskProvider } from './context/TaskContext.tsx';

const App: React.FC = () => {
  return (
    <TaskProvider>
      <TaskForm />
      <TaskList />
    </TaskProvider>
  );
};

export default App;
