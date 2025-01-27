import React, { createContext, useState, useContext, ReactNode } from 'react';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'Pendente' | 'Em progresso' | 'Concluída';
  priority: 'Baixa' | 'Média' | 'Alta';
  createdAt: Date;
  dueDate: Date;
  responsible: string;
}

export interface TaskContextType {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (taskId: string) => void;
  editTask: (task: Task) => void;
  filterTasks: (status: string, priority: string) => Task[];
}

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
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const removeTask = (taskId: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const editTask = (updatedTask: Task) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === updatedTask.id ? { ...task, ...updatedTask } : task
      )
    );
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
