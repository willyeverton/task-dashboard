import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';

/**
 * The `TaskFilters` component is a React functional component that renders a set of filters for tasks. It allows the user to filter tasks by status (Pending, In Progress, Completed) and priority (Low, Medium, High). The component receives the current filter values and callback functions to update the filters as props.
 *
 * @param filterStatus - The current status filter value.
 * @param filterPriority - The current priority filter value.
 * @param onStatusChange - A callback function to update the status filter value.
 * @param onPriorityChange - A callback function to update the priority filter value.
 * @returns A React functional component that renders the task filters.
 */
export const TaskFilters = React.memo<TaskFiltersProps>(({
  filterStatus,
  filterPriority,
  onStatusChange,
  onPriorityChange
}) => {
  return (
    <fieldset style={{ border: '1px solid #ddd', borderRadius: '4px' }}>
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
            onChange={(e) => onPriorityChange(e.target.value)}
          >
            <MenuItem value="">Todas</MenuItem>
            <MenuItem value="Baixa">Baixa</MenuItem>
            <MenuItem value="Média">Média</MenuItem>
            <MenuItem value="Alta">Alta</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </fieldset>
  )
});
