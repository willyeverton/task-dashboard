import React, { useState, useEffect } from 'react';
import { useTaskContext } from '../context/TaskContext';
import { Button, Card, Typography, Box, Dialog, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { Task } from '../context/TaskContext';
import TaskForm from './TaskForm';

const TaskList: React.FC = () => {
  const { tasks, removeTask, filterTasks } = useTaskContext();
  const [filteredTasks, setFilteredTasks] = useState<Task[]>(tasks);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [filterStatus, setFilterStatus] = useState<string>('');
  const [filterPriority, setFilterPriority] = useState<string>('');

  useEffect(() => {
    setFilteredTasks(tasks);
  }, [tasks]);

  const handleFilter = () => {
    const filtered = filterTasks(filterStatus, filterPriority);
    setFilteredTasks(filtered);
  };

  useEffect(() => {
    handleFilter();
  }, [filterStatus, filterPriority]);

  const handleEdit = (task: Task) => {
    setEditingTask(task);
    setOpenDialog(true);
  };

  const handleAddNew = () => {
    setEditingTask(null);
    setOpenDialog(true);
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h4" gutterBottom>
          Lista de Tarefas
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddNew}
        >
          Nova Tarefa
        </Button>
      </Box>

      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel>Status</InputLabel>
          <Select
            value={filterStatus}
            label="Status"
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <MenuItem value="">Todos</MenuItem>
            <MenuItem value="Pendente">Pendente</MenuItem>
            <MenuItem value="Em progresso">Em progresso</MenuItem>
            <MenuItem value="Concluída">Concluída</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel>Prioridade</InputLabel>
          <Select
            value={filterPriority}
            label="Prioridade"
            onChange={(e) => setFilterPriority(e.target.value)}
          >
            <MenuItem value="">Todas</MenuItem>
            <MenuItem value="Baixa">Baixa</MenuItem>
            <MenuItem value="Média">Média</MenuItem>
            <MenuItem value="Alta">Alta</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {filteredTasks.map((task) => (
        <Card key={task.id} sx={{ marginBottom: 2 }}>
          <Box padding={2}>
            <Typography variant="h6">{task.title}</Typography>
            <Typography variant="body2">{task.description}</Typography>
            <Typography variant="body2">Status: {task.status}</Typography>
            <Typography variant="body2">Prioridade: {task.priority}</Typography>
            <Typography variant="body2">Responsável: {task.responsible}</Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button onClick={() => handleEdit(task)}>Editar</Button>
              <Button onClick={() => removeTask(task.id)}>Remover</Button>
            </Box>
          </Box>
        </Card>
      ))}

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <TaskForm editingTask={editingTask} onClose={() => setOpenDialog(false)} />
      </Dialog>
    </Box>
  );
};

export default TaskList;
