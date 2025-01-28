import React, { useState, useEffect } from 'react';
import { Task, useTaskContext } from '../context/TaskContext.tsx';
import { Button, TextField, MenuItem, Select, InputLabel, FormControl, SelectChangeEvent, Box } from '@mui/material';

interface TaskFormProps {
  editingTask?: Task | null;
  onClose?: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ editingTask, onClose }) => {
  const { addTask, editTask } = useTaskContext();

  const [task, setTask] = useState<Task>({
    title: '',
    description: '',
    status: 'Pendente',
    priority: 'Baixa',
    responsible: ''
  } as Task);

  useEffect(() => {
    if (editingTask) {
      setTask({
        ...editingTask
      });
    }
  }, [editingTask]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | { name?: string; value: unknown }> | SelectChangeEvent<string>
  ) => {
    const { name, value } = e.target;
    setTask(prev => ({ ...prev, [name as string]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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

    setTask({
      title: '',
      description: '',
      status: 'Pendente',
      priority: 'Baixa',
      responsible: '',
      dueDate: ''
    } as Task);
    if (onClose) onClose();
  };

  return (
    <Box sx={{ p: 2 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Título"
          name="title"
          value={task.title}
          onChange={handleChange}
          required
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Descrição"
          name="description"
          value={task.description}
          onChange={handleChange}
          required
          fullWidth
          sx={{ mb: 2 }}
        />
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Status</InputLabel>
          <Select name="status" value={task.status} onChange={handleChange}>
            <MenuItem value="Pendente">Pendente</MenuItem>
            <MenuItem value="Em progresso">Em progresso</MenuItem>
            <MenuItem value="Concluída">Concluída</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Prioridade</InputLabel>
          <Select name="priority" value={task.priority} onChange={handleChange}>
            <MenuItem value="Baixa">Baixa</MenuItem>
            <MenuItem value="Média">Média</MenuItem>
            <MenuItem value="Alta">Alta</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Responsável"
          name="responsible"
          value={task.responsible}
          onChange={handleChange}
          required
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Vencimento"
          type="date"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
          required
          fullWidth
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" fullWidth>
          {editingTask ? 'Salvar Alterações' : 'Adicionar Tarefa'}
        </Button>
      </form>
    </Box>
  );
};

export default TaskForm;
