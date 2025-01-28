import { Box, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';

interface TaskSortingProps {
  sortBy: string;
  sortOrder: 'asc' | 'desc';
  onSortByChange: (value: string) => void;
  onSortOrderChange: () => void;
}

export const TaskSorting: React.FC<TaskSortingProps> = ({
  sortBy,
  sortOrder,
  onSortByChange,
  onSortOrderChange
}) => (
  <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
    <FormControl sx={{ minWidth: 120 }}>
      <InputLabel>Ordenar por</InputLabel>
      <Select
        value={sortBy}
        label="Ordenar por"
        onChange={(e) => onSortByChange(e.target.value)}
      >
        <MenuItem value="createdAt">Data de Criação</MenuItem>
        <MenuItem value="dueDate">Data de Vencimento</MenuItem>
        <MenuItem value="title">Título</MenuItem>
        <MenuItem value="priority">Prioridade</MenuItem>
      </Select>
    </FormControl>

    <Button
      onClick={onSortOrderChange}
      startIcon={sortOrder === 'asc' ? '↑' : '↓'}
    >
    </Button>
  </Box>
);
