import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';

interface TaskFiltersProps {
  filterStatus: string;
  filterPriority: string;
  onStatusChange: (value: string) => void;
  onPriorityChange: (value: string) => void;
}

export const TaskFilters: React.FC<TaskFiltersProps> = ({
  filterStatus,
  filterPriority,
  onStatusChange,
  onPriorityChange
}) => (
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
);
