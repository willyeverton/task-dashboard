import { Grid } from '@mui/material';
import { TaskChart } from 'components/Charts/TaskChart';
import { useTaskContext } from 'context/TaskContext';
import React from 'react';

/**
 * The `Chart` component is a React functional component that renders a grid layout with a single `TaskChart` component. It retrieves the `tasks` data from the `useTaskContext` hook and passes it as a prop to the `TaskChart` component.
 */
const Chart: React.FC = () => {
  const { tasks } = useTaskContext();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <TaskChart tasks={tasks} />
      </Grid>
    </Grid>
  );
};
export default Chart;
