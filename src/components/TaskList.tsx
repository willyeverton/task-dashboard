import React, { useState, useEffect } from 'react';
import { useTaskContext } from '../context/TaskContext';
import { Button, Card, Typography, Box, Dialog, Select, MenuItem, FormControl, InputLabel, Grid } from '@mui/material';
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

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<string>('');

  const handleDeleteClick = (taskId: string) => {
    setTaskToDelete(taskId);
    setOpenDeleteDialog(true);
  };

  const handleConfirmDelete = () => {
    removeTask(taskToDelete);
    setOpenDeleteDialog(false);
  };


  const [sortBy, setSortBy] = useState<string>('createdAt');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const handleSort = (tasks: Task[]) => {
    return [...tasks].sort((a, b) => {
      switch (sortBy) {
        case 'title':
          return sortOrder === 'asc'
            ? a.title.localeCompare(b.title)
            : b.title.localeCompare(a.title);
        case 'priority':
          const priorityOrder = { 'Alta': 3, 'Média': 2, 'Baixa': 1 };
          return sortOrder === 'asc'
            ? priorityOrder[a.priority] - priorityOrder[b.priority]
            : priorityOrder[b.priority] - priorityOrder[a.priority];
        case 'dueDate':
          return sortOrder === 'asc'
            ? new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
            : new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime();
        default: // createdAt
          return sortOrder === 'asc'
            ? a.createdAt.getTime() - b.createdAt.getTime()
            : b.createdAt.getTime() - a.createdAt.getTime();
      }
    });
  };

  useEffect(() => {
    const sorted = handleSort(filteredTasks);
    setFilteredTasks(sorted);
  }, [sortBy, sortOrder]);

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

        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel>Ordenar por</InputLabel>
          <Select
            value={sortBy}
            label="Ordenar por"
            onChange={(e) => setSortBy(e.target.value)}
          >
            <MenuItem value="createdAt">Data de Criação</MenuItem>
            <MenuItem value="dueDate">Data de Vencimento</MenuItem>
            <MenuItem value="title">Título</MenuItem>
            <MenuItem value="priority">Prioridade</MenuItem>
          </Select>
        </FormControl>

        <Button
          onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
          startIcon={sortOrder === 'asc' ? '↑' : '↓'}
        >
          {sortOrder === 'asc' ? 'Crescente' : 'Decrescente'}
        </Button>

      </Box>

      <Grid container spacing={2}>
        {filteredTasks.map((task) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4} key={task.id}>
            <Card sx={{ height: '100%' }}>
              <Box padding={2}>
                <Typography variant="h6" noWrap>{task.title}</Typography>
                <Typography variant="body2" sx={{ minHeight: '40px' }}>{task.description}</Typography>
                <Typography variant="body2">Status: {task.status}</Typography>
                <Typography variant="body2">Prioridade: {task.priority}</Typography>
                <Typography variant="body2">Responsável: {task.responsible}</Typography>
                <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                  <Button onClick={() => handleEdit(task)}>Editar</Button>
                  <Button onClick={() => handleDeleteClick(task.id)}>Remover</Button>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <TaskForm editingTask={editingTask} onClose={() => setOpenDialog(false)} />
      </Dialog>

      <Dialog open={openDeleteDialog} onClose={() => setOpenDeleteDialog(false)}>
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Confirmar exclusão
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Deseja realmente excluir esta tarefa?
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
            <Button onClick={() => setOpenDeleteDialog(false)}>Cancelar</Button>
            <Button variant="contained" color="error" onClick={handleConfirmDelete}>
              Excluir
            </Button>
          </Box>
        </Box>
      </Dialog>

    </Box>
  );
};

export default TaskList;
