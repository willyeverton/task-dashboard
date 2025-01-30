import { useState, useEffect } from 'react';
import { useTaskContext } from '../context/TaskContext';
import { dateFormatter } from 'utils/dateFormatter';

const initialTaskState = {
  title: '',
  description: '',
  status: 'Pendente',
  priority: 'Baixa',
  responsible: '',
  dueDate: dateFormatter.toInputDateTime(new Date())
} as Task;

/**
 * A React hook that manages the state and behavior of a task form.
 *
 * @param editingTask - The task being edited, or `null` if creating a new task.
 * @param onClose - An optional callback function to be called when the form is submitted.
 * @returns An object containing the task state, form event handlers, form validation errors, and form validity.
 */
export const useTaskFormManager = (editingTask: Task | null | undefined, onClose?: () => void) => {
  const { addTask, editTask } = useTaskContext();
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [task, setTask] = useState<Task>(initialTaskState);
  const [isValid, setIsValid] = useState<Boolean>(false);

  // Initialize task state with editingTask if provided
  useEffect(() => {
    if (editingTask) {
      setTask(editingTask);
    }
  }, [editingTask]);

  // Validate form on task state change
  useEffect(() => {
    validateForm();
  }, [task]);

  // Validate form on form submission
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'title':
        if (!value.trim()) return 'Título é obrigatório';
        if (value.length < 3) return 'Título deve ter no mínimo 3 caracteres';
        return '';

      case 'description':
        if (!value.trim()) return 'Descrição é obrigatória';
        if (value.length < 10) return 'Descrição deve ter no mínimo 10 caracteres';
        return '';

      case 'responsible':
        if (!value.trim()) return 'Responsável é obrigatório';
        return '';

      case 'dueDate':
        if (!value) return 'Data de vencimento é obrigatória';
        if (new Date(value) < new Date()) return 'Data deve ser futura';
        return '';

      default:
        return '';
    }
  };

  // Validate the entire form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    Object.keys(task).forEach(key => {
      const error = validateField(key, task[key as keyof Task]?.toString() || '');
      if (error) {
        newErrors[key as keyof FormErrors] = error;
      }
    });

    const formIsValid = Object.keys(newErrors).length === 0;
    setErrors(newErrors);
    setIsValid(formIsValid);

    return formIsValid;
  };

  // Handle form changes
  const handleChange = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target;
    setTask(prev => ({ ...prev, [name]: value }));
    setTouched(prev => ({ ...prev, [name]: true }));

    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  // Handle form blur
  const handleBlur = (name: string) => {
    setTouched(prev => ({ ...prev, [name]: true }));

    const error = validateField(name, task[name as keyof Task]?.toString() || '');
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (editingTask) {
        editTask(task);
      }
      else {
        const newTask = {
          ...task,
          id: Date.now().toString(),
          createdAt: new Date(),
        };
        addTask(newTask);
      }
      setTask(initialTaskState);

      if (onClose) {
        onClose();
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return {
    task,
    handleChange,
    handleSubmit,
    errors,
    touched,
    handleBlur,
    isValid
  };
};
