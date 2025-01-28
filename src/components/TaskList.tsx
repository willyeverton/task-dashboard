import React, { useEffect, useState } from 'react';
import { useTaskContext } from '../context/TaskContext.tsx';
import { Button, Card, Typography, Box } from '@mui/material';
import { Task } from '../context/TaskContext.tsx';

const TaskList: React.FC = () => {
  const { tasks, removeTask, filterTasks } = useTaskContext();
  const [filteredTasks, setFilteredTasks] = useState<Task[]>(tasks);

  useEffect(() => {
    setFilteredTasks(tasks);
  }, [tasks]);

  const handleFilter = (status: string, priority: string) => {
    const filtered = filterTasks(status, priority);
    setFilteredTasks(filtered);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Lista de Tarefas
      </Typography>
      {/* Adicionar filtros */}
      <Button onClick={() => handleFilter('Pendente', 'Alta')}>Filtrar</Button>
      {filteredTasks.map((task) => (
        <Card key={task.id} sx={{ marginBottom: 2 }}>
          <Box padding={2}>
            <Typography variant="h6">{task.title}</Typography>
            <Typography variant="body2">{task.description}</Typography>
            <Typography variant="body2">Status: {task.status}</Typography>
            <Typography variant="body2">Prioridade: {task.priority}</Typography>
            <Typography variant="body2">Responsável: {task.responsible}</Typography>
            <Button onClick={() => removeTask(task.id)}>Remover</Button>
          </Box>
        </Card>
      ))}
    </Box>
  );
};

export default TaskList;
