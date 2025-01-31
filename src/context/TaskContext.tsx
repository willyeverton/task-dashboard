import React, { createContext, useState, useContext, ReactNode } from 'react';
import { taskStorage } from '../services/taskStorage';

/**
 * The TaskContext is a React context that provides access to the task management functionality
 * in the application. It is used to share task-related state and operations across the
 * component tree.
 */
const TaskContext = createContext<TaskContextType | undefined>(undefined);

/**
 * A custom React hook that provides access to the TaskContext. This hook ensures that the
 * TaskContext is being used within a TaskProvider component, and returns the context
 * value.
 *
 * @returns {TaskContextType} - The TaskContext value.
 * @throws {Error} - If the hook is used outside of a TaskProvider component.
 */
export const useTaskContext = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};

/**
 * The `TaskProvider` component is a React context provider that manages the state and operations related to tasks in the application. It provides access to the task management functionality, including adding, removing, editing, and filtering tasks. The component uses the `taskStorage` service to persist the task data.
 *
 * @param {ReactNode} children - The child components that will have access to the task management functionality.
 * @returns {React.ReactElement} - The rendered component.
 */

export const TaskProvider = ({ children }: { children: ReactNode }): React.ReactElement => {
  const [tasks, setTasks] = useState<Task[]>(() => taskStorage.load());

  // Function to add a new task
  const addTask = (task: Task) => {
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    taskStorage.save(updatedTasks);
  };

  // Function to remove a task
  const removeTask = (taskId: string) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    taskStorage.save(updatedTasks);
  };

  // Function to edit a task
  const editTask = (updatedTask: Task) => {
    const updatedTasks = tasks.map(task =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
    taskStorage.save(updatedTasks);
  };

  // Function to filter tasks based on status and priority
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
