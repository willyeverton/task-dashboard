import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { BoxButtons, BoxHeader, StyledButton } from './styles';

/**
 * A React functional component that renders the task header.
 *
 * @param onAddNew - A function to be called when the "Nova Tarefa" button is clicked.
 * @returns A React functional component that renders the task header.
 */
export const TaskHeader: React.FC<TaskHeaderProps> = ({ onAddNew }) => {
  const navigate = useNavigate();
  return (
    <BoxHeader>
      <Typography variant="h4" gutterBottom>
        Lista de Tarefas
      </Typography>
      <BoxButtons>
        <StyledButton
          variant="contained"
          color="secondary"
          onClick={() => navigate('/chart')}
        >
          Grafico
        </StyledButton>
        <StyledButton variant="contained" color="primary" onClick={onAddNew}>
          Nova Tarefa
        </StyledButton>
      </BoxButtons>
    </BoxHeader>
  )
};
