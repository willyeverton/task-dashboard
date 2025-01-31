import { Box, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';

/**
 * A React functional component that renders the task sorting options.
 *
 * @param sortBy - The current sorting criteria.
 * @param sortOrder - The current sorting order.
 * @param onSortByChange - A function to be called when the sorting criteria is changed.
 * @param onSortOrderChange - A function to be called when the sorting order is changed.
 */
export const TaskSorting = React.memo<TaskSortingProps>(({
  sortBy,
  sortOrder,
  onSortByChange,
  onSortOrderChange
}) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
      <Button sx={{
        minWidth: 0, '& .MuiButton-startIcon': {
          margin: 0,
          fontSize: '1.6rem',
        }
      }}
        onClick={onSortOrderChange}
        startIcon={sortOrder === 'asc' ? '↑' : '↓'}
      >
      </Button>
      <FormControl>
        <InputLabel>Ordenar por</InputLabel>
        <Select
          value={sortBy}
          label="Ordenar por"
          onChange={(e) => onSortByChange(e.target.value)}
        >
          <MenuItem value="createdAt">Data de Criação</MenuItem>
          <MenuItem value="dueDate">Data de Vencimento</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
});
