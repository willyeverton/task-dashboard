import { StyledCard, CardContent, ButtonContainer } from './styles';
import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { dateFormatter } from '../../../utils/dateFormatter';

/**
 * Renders a TaskCard component that displays information about a task, including its title, description, status, priority, responsible, and due date.
 *
 * @param task - The task object to be displayed.
 * @param onEdit - A function to be called when the "Editar" button is clicked, passing the task object as an argument.
 * @param onDelete - A function to be called when the "Remover" button is clicked, passing the task ID as an argument.
 * @returns A React component that renders the TaskCard.
 */
export const TaskCard: React.FC<TaskCardProps> = ({ task, onEdit, onDelete }) => (
  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
    <StyledCard>
      <CardContent>
        <Typography variant="h6" noWrap>{task.title}</Typography>
        <Typography variant="body2">{task.description}</Typography>
        <Typography variant="body2">Status: {task.status}</Typography>
        <Typography variant="body2">Prioridade: {task.priority}</Typography>
        <Typography variant="body2">Responsável: {task.responsible}</Typography>
        <Typography variant="body2" color={dateFormatter.isOverdue(task.dueDate) ? 'error' : 'text.secondary'}>
          Vencimento: {dateFormatter.toLocalDateTime(task.dueDate)}
        </Typography>
        <ButtonContainer>
          <Button onClick={() => onEdit(task)}>Editar</Button>
          <Button onClick={() => onDelete(task.id)}>Remover</Button>
        </ButtonContainer>
      </CardContent>
    </StyledCard>
  </Grid>
);
