import { Box, Button, Card, Grid, Typography } from '@mui/material';
import { Task } from '../context/TaskContext';
import React from 'react';

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (taskId: string) => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task, onEdit, onDelete }) => (
  <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4}>
    <Card sx={{ height: '100%' }}>
      <Box padding={2}>
        <Typography variant="h6" noWrap>{task.title}</Typography>
        <Typography variant="body2" sx={{ minHeight: '40px' }}>{task.description}</Typography>
        <Typography variant="body2">Status: {task.status}</Typography>
        <Typography variant="body2">Prioridade: {task.priority}</Typography>
        <Typography variant="body2">Responsável: {task.responsible}</Typography>
        <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
          <Button onClick={() => onEdit(task)}>Editar</Button>
          <Button onClick={() => onDelete(task.id)}>Remover</Button>
        </Box>
      </Box>
    </Card>
  </Grid>
);
