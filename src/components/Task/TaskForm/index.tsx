import { Button, TextField, MenuItem, Select, InputLabel, FormControl, Box } from '@mui/material';
import { TaskFormProps } from '../../../types/task.types';
import { useTaskFormManager } from '../../../hooks/useTaskFormManager';
import React from 'react';
import { ButtonGroup, FormContainer, StyledButton } from './styles';

const TaskForm: React.FC<TaskFormProps> = ({ editingTask, onClose }) => {
  const { task, handleChange, handleSubmit } = useTaskFormManager(editingTask, onClose);

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Título"
          name="title"
          value={task.title}
          onChange={handleChange}
          required
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          multiline
          rows={4}
          label="Descrição"
          name="description"
          value={task.description}
          onChange={handleChange}
          required
          fullWidth
          sx={{ mb: 2 }}
        />
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Status</InputLabel>
          <Select label="Status" name="status" value={task.status} onChange={handleChange}>
            <MenuItem value="Pendente">Pendente</MenuItem>
            <MenuItem value="Em progresso">Em progresso</MenuItem>
            <MenuItem value="Concluída">Concluída</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Prioridade</InputLabel>
          <Select label="Prioridade" name="priority" value={task.priority} onChange={handleChange}>
            <MenuItem value="Baixa">Baixa</MenuItem>
            <MenuItem value="Média">Média</MenuItem>
            <MenuItem value="Alta">Alta</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Responsável"
          name="responsible"
          value={task.responsible}
          onChange={handleChange}
          required
          fullWidth
          sx={{ mb: 2 }}
        />
        <FormControl fullWidth sx={{ mb: 2 }}>
          <TextField
            label="Vencimento"
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
            required
            fullWidth
            sx={{ mb: 2 }}
          />
        </FormControl>
        <ButtonGroup>
          <StyledButton
            variant="outlined"
            onClick={onClose}
          >
            Cancelar
          </StyledButton>
          <StyledButton
            type="submit"
            variant="contained"
          >
            {editingTask ? 'Salvar Alterações' : 'Adicionar Tarefa'}
          </StyledButton>
        </ButtonGroup>
      </form>
    </FormContainer>
  );
};

export default TaskForm;
