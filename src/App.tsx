import React from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { TaskProvider } from './context/TaskContext';

const App: React.FC = () => {
  return (
    <TaskProvider>
      <div style={{ padding: 20 }}>
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default App;
