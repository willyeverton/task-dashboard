import React, { useState, useEffect } from 'react';
import { useTaskContext } from '../context/TaskContext.tsx';
import { Button, Card, Typography, Box, Dialog } from '@mui/material';
import { Task } from '../context/TaskContext.tsx';
import TaskForm from './TaskForm.tsx';

const TaskList: React.FC = () => {
  const { tasks, removeTask, filterTasks } = useTaskContext();
  const [filteredTasks, setFilteredTasks] = useState<Task[]>(tasks);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    setFilteredTasks(tasks);
  }, [tasks]);

  const handleFilter = (status: string, priority: string) => {
    const filtered = filterTasks(status, priority);
    setFilteredTasks(filtered);
  };

  const handleEdit = (task: Task) => {
    setEditingTask(task);
    setOpenDialog(true);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Lista de Tarefas
      </Typography>
      <Button onClick={() => handleFilter('Pendente', 'Alta')}>Filtrar</Button>
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
