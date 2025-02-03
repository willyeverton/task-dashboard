import { InputLabel, MenuItem } from '@mui/material';
import React, { useMemo } from 'react';
import { BoxFilters, StyledFieldset, StyledFormControl, StyledSelect } from './styles';

/**
 * The `TaskFilters` component is a React functional component that renders a set of filters for tasks. It allows the user to filter tasks by status (Pending, In Progress, Completed) and priority (Low, Medium, High). The component receives the current filter values and callback functions to update the filters as props.
 *
 * @param filterStatus - The current status filter value.
 * @param filterPriority - The current priority filter value.
 * @param onStatusChange - A callback function to update the status filter value.
 * @param onPriorityChange - A callback function to update the priority filter value.
 * @returns A React functional component that renders the task filters.
 */
const TaskFilters: React.FC<TaskFiltersProps> = (({
  filterStatus,
  filterPriority,
  onStatusChange,
  onPriorityChange
}) => {

  const filterOptions = useMemo(() => ({
    status: ['Pendente', 'Em progresso', 'Concluída'],
    priority: ['Baixa', 'Média', 'Alta']
  }), []);

  return (
    <StyledFieldset>
      <legend>Filtros</legend>
      <BoxFilters>
        <StyledFormControl>
          <InputLabel>Status</InputLabel>
          <StyledSelect
            value={filterStatus}
            label="Status"
            onChange={(e) => onStatusChange(e.target.value as string)}
          >
            <MenuItem value="">Todos</MenuItem>
            {filterOptions.status.map((status) => (
              <MenuItem key={status} value={status}>{status}</MenuItem>
            ))}
          </StyledSelect>
        </StyledFormControl>

        <StyledFormControl>
          <InputLabel>Prioridade</InputLabel>
          <StyledSelect
            value={filterPriority}
            label="Prioridade"
            onChange={(e) => onPriorityChange(e.target.value as string)}
          >
            <MenuItem value="">Todas</MenuItem>
            {filterOptions.priority.map((priority) => (
              <MenuItem key={priority} value={priority}>{priority}</MenuItem>
            ))}
          </StyledSelect>
        </StyledFormControl>
      </BoxFilters>
    </StyledFieldset>
  )
});

export default TaskFilters;
