import { Grid } from '@mui/material';
import { TaskChart } from 'components/Charts/TaskChart';
import { useTaskContext } from 'context/TaskContext';
import React from 'react';

export const Chart = () => {
  const { tasks } = useTaskContext();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <TaskChart tasks={tasks} />
      </Grid>
    </Grid>
  );
};
