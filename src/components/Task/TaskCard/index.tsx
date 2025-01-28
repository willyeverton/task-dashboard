import { TaskCardProps } from 'types/task.types';
import { StyledCard, CardContent, ButtonContainer } from './styles';
import { Button, Grid, Typography } from '@mui/material';
import React from 'react';

export const TaskCard: React.FC<TaskCardProps> = ({ task, onEdit, onDelete }) => (
  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
    <StyledCard>
      <CardContent>
        <Typography variant="h6" noWrap>{task.title}</Typography>
        <Typography variant="body2">{task.description}</Typography>
        <Typography variant="body2">Status: {task.status}</Typography>
        <Typography variant="body2">Prioridade: {task.priority}</Typography>
        <Typography variant="body2">Responsável: {task.responsible}</Typography>
        <ButtonContainer>
          <Button onClick={() => onEdit(task)}>Editar</Button>
          <Button onClick={() => onDelete(task.id)}>Remover</Button>
        </ButtonContainer>
      </CardContent>
    </StyledCard>
  </Grid>
);
