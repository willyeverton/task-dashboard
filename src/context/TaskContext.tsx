import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Task, TaskContextType } from 'types/task.types';

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const useTaskContext = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (taskId: string) => {
    setTasks([...tasks
      .filter((task) =>
        task.id !== taskId
      )
    ]);
  };

  const editTask = (updatedTask: Task) => {
    setTasks([...tasks
      .map((task) =>
        task.id === updatedTask.id
          ? updatedTask
          : task
      )
    ]);
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
