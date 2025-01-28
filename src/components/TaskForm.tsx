import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext.tsx';
import { Button, TextField, MenuItem, Select, InputLabel, FormControl, SelectChangeEvent } from '@mui/material';

const TaskForm: React.FC = () => {
  const { addTask } = useTaskContext();

  const [task, setTask] = useState({
    title: '',
    description: '',
    status: 'Pendente',
    priority: 'Baixa',
    responsible: '',
    dueDate: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | { name?: string; value: unknown }> | SelectChangeEvent<string>
  ) => {
    const { name, value } = e.target;
    setTask({ ...task, [name as string]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask = {
      ...task,
      id: new Date().toISOString(),
      createdAt: new Date(),
      dueDate: new Date(task.dueDate),
      status: task.status as "Pendente" | "Em progresso" | "Concluída",
      priority: task.priority as "Baixa" | "Média" | "Alta"
    };
    addTask(newTask);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Título"
        name="title"
        value={task.title}
        onChange={handleChange}
        required
        fullWidth
      />
      <TextField
        label="Descrição"
        name="description"
        value={task.description}
        onChange={handleChange}
        required
        fullWidth
      />
      <FormControl fullWidth>
        <InputLabel>Status</InputLabel>
        <Select name="status" value={task.status} onChange={handleChange}>
          <MenuItem value="Pendente">Pendente</MenuItem>
          <MenuItem value="Em progresso">Em progresso</MenuItem>
          <MenuItem value="Concluída">Concluída</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
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
      />
      <TextField
        type="date"
        name="dueDate"
        value={task.dueDate}
        onChange={handleChange}
        required
        fullWidth
      />
      <Button type="submit">Adicionar Tarefa</Button>
    </form>
  );
};

export default TaskForm;
