import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Task, TaskContextType } from 'types/task.types';
import { taskStorage } from '../services/taskStorage';

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const useTaskContext = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>(() => taskStorage.load());

  const addTask = (task: Task) => {
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    taskStorage.save(updatedTasks);
  };

  const removeTask = (taskId: string) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    taskStorage.save(updatedTasks);
  };

  const editTask = (updatedTask: Task) => {
    const updatedTasks = tasks.map(task =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
    taskStorage.save(updatedTasks);
  };

  const filterTasks = (status: string, priority: string) => {
    return tasks.filter(
      (task) =>
        (status ? task.status === status : true) &&
        (priority ? task.priority === priority : true)
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask, editTask, filterTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
