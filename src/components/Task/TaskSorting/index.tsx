import { Button, InputLabel, MenuItem } from '@mui/material';
import React from 'react';
import { BoxSorting, StyledFormControl, StyledSelect } from './styles';

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
    <BoxSorting>
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
      <StyledFormControl>
        <InputLabel>Ordenar por</InputLabel>
        <StyledSelect
          value={sortBy}
          label="Ordenar por"
          onChange={(e) => onSortByChange(e.target.value as string)}
        >
          <MenuItem value="createdAt">Data de Criação</MenuItem>
          <MenuItem value="dueDate">Data de Vencimento</MenuItem>
        </StyledSelect>
      </StyledFormControl>
    </BoxSorting>
  )
});
