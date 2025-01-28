import React, { useState } from 'react';
import { Task, useTaskContext } from '../context/TaskContext.tsx';
import { Button, TextField, MenuItem, Select, InputLabel, FormControl, SelectChangeEvent } from '@mui/material';

const TaskForm: React.FC = () => {
  const { addTask } = useTaskContext();

  const [task, setTask] = useState<Task>({
    title: '',
    description: '',
    status: 'Pendente',
    priority: 'Baixa',
    responsible: '',
    dueDate: new Date()
  } as Task);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | { name?: string; value: unknown }> | SelectChangeEvent<string>
  ) => {
    const { name, value } = e.target;
    task[name as string] = value;
    setTask({ ...task });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask = {
      ...task,
      id: Date.now().toString(),
      createdAt: new Date(),
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
