import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useMemo } from 'react';

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
    <fieldset style={{ border: '1px solid #ddd', borderRadius: '4px', width: 'max-content' }}>
      <legend>Filtros</legend>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel>Status</InputLabel>
          <Select
            value={filterStatus}
            label="Status"
            onChange={(e) => onStatusChange(e.target.value)}
          >
            <MenuItem value="">Todos</MenuItem>
            {filterOptions.status.map((status) => (
              <MenuItem key={status} value={status}>{status}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel>Prioridade</InputLabel>
          <Select
            value={filterPriority}
            label="Prioridade"
            onChange={(e) => onPriorityChange(e.target.value)}
          >
            <MenuItem value="">Todas</MenuItem>
            {filterOptions.priority.map((priority) => (
              <MenuItem key={priority} value={priority}>{priority}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </fieldset>
  )
});

export default TaskFilters;
