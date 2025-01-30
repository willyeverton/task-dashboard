import { TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { useTaskFormManager } from '../../../hooks/useTaskFormManager';
import React from 'react';
import { ButtonGroup, FormContainer, StyledButton } from './styles';

/**
 * Renders a TaskForm component that allows users to create or edit tasks.
 *
 * @param editingTask - The task object to be edited, if any.
 * @param onClose - A function to be called when the form is closed.
 * @returns A React component that renders the TaskForm.
 */
const TaskForm: React.FC<TaskFormProps> = ({ editingTask, onClose }) => {
  const {
    task,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid
  } = useTaskFormManager(editingTask, onClose);

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Título"
          name="title"
          value={task.title}
          onChange={handleChange}
          onBlur={() => handleBlur('title')}
          error={touched.title && !!errors.title}
          helperText={touched.title && errors.title}
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
          onBlur={() => handleBlur('description')}
          error={touched.description && !!errors.description}
          helperText={touched.description && errors.description}
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
          onBlur={() => handleBlur('responsible')}
          error={touched.responsible && !!errors.responsible}
          helperText={touched.responsible && errors.responsible}
          required
          fullWidth
          sx={{ mb: 2 }}
        />
        <FormControl fullWidth sx={{ mb: 2 }}>
          <TextField
            label="Vencimento"
            type="datetime-local"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
            onBlur={() => handleBlur('dueDate')}
            error={touched.dueDate && !!errors.dueDate}
            helperText={touched.dueDate && errors.dueDate}
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
            disabled={!isValid}
          >
            {editingTask ? 'Salvar Alterações' : 'Adicionar Tarefa'}
          </StyledButton>
        </ButtonGroup>
      </form>
    </FormContainer>
  );
};

export default TaskForm;
