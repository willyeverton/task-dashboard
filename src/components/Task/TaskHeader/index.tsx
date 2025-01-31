import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import React from 'react';

/**
 * A React functional component that renders the task header.
 *
 * @param onAddNew - A function to be called when the "Nova Tarefa" button is clicked.
 * @returns A React functional component that renders the task header.
 */
export const TaskHeader: React.FC<TaskHeaderProps> = ({ onAddNew }) => {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
      <Typography variant="h4" gutterBottom>
        Lista de Tarefas
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate('/chart')}
        >
          Chart
        </Button>
        <Button variant="contained" color="primary" onClick={onAddNew}>
          Nova Tarefa
        </Button>
      </Box>
    </Box>
  )
};
