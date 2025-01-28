import { useState, useEffect } from 'react';
import { useTaskContext } from '../context/TaskContext';
import { Task } from '../types/task.types';
import { SelectChangeEvent } from '@mui/material';

export const useTaskFormManager = (editingTask: Task | null | undefined, onClose?: () => void) => {
  const { addTask, editTask } = useTaskContext();
  const [task, setTask] = useState<Task>({
    title: '',
    description: '',
    status: 'Pendente',
    priority: 'Baixa',
    responsible: '',
    dueDate: new Date().toISOString().split('T')[0],
    createdAt: new Date(),
    id: ''
  });

  useEffect(() => {
    if (editingTask) {
      setTask({
        ...editingTask,
        dueDate: new Date(editingTask.dueDate).toISOString().split('T')[0]
      });
    }
  }, [editingTask]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | { name?: string; value: unknown }> | SelectChangeEvent<unknown>
  ) => {
    const { name, value } = e.target;
    setTask(prev => ({ ...prev, [name as string]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingTask) {
      editTask(task);
    } else {
      const newTask = {
        ...task,
        id: Date.now().toString(),
        createdAt: new Date(),
      };
      addTask(newTask);
    }
    setTask({
      title: '',
      description: '',
      status: 'Pendente',
      priority: 'Baixa',
      responsible: '',
      dueDate: new Date().toISOString().split('T')[0],
      createdAt: new Date(),
      id: ''
    });
    if (onClose) onClose();
  };

  return {
    task,
    handleChange,
    handleSubmit
  };
};
