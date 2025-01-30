import { Box, Button, Typography } from '@mui/material';
import React from 'react';

/**
 * A React functional component that renders the task header.
 *
 * @param onAddNew - A function to be called when the "Nova Tarefa" button is clicked.
 * @returns A React functional component that renders the task header.
 */
export const TaskHeader: React.FC<TaskHeaderProps> = ({ onAddNew }) => (
  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
    <Typography variant="h4" gutterBottom>
      Lista de Tarefas
    </Typography>
    <Button variant="contained" color="primary" onClick={onAddNew}>
      Nova Tarefa
    </Button>
  </Box>
);
