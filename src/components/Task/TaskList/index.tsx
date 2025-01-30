import React from 'react';
import { Box, Dialog, Grid } from '@mui/material';
import TaskForm from '../TaskForm';
import { TaskHeader } from '../TaskHeader';
import { TaskFilters } from '../TaskFilters';
import { TaskSorting } from '../TaskSorting';
import { TaskCard } from '../TaskCard';
import { DeleteConfirmDialog } from '../../DeleteConfirmDialog';
import { useTaskListManager } from 'hooks/useTaskListManager';
import { FilterSection } from './styles';

/**
 * The `TaskList` component is responsible for rendering the main task list view, including the task header, filters, sorting options, and the list of task cards.
 *
 * @returns A React functional component that renders the task list view.
 */
const TaskList: React.FC = () => {

  const {
    filteredTasks,
    editingTask,
    openDialog,
    filterStatus,
    filterPriority,
    sortOrder,
    sortBy,
    openDeleteDialog,
    setSortBy,
    handleAddNew,
    setFilterStatus,
    setFilterPriority,
    setSortOrder,
    handleDeleteClick,
    handleConfirmDelete,
    setOpenDialog,
    setOpenDeleteDialog,
    handleEdit
  } = useTaskListManager();

  return (
    <Box>
      <TaskHeader onAddNew={handleAddNew} />

      <FilterSection>
        <TaskFilters
          filterStatus={filterStatus}
          filterPriority={filterPriority}
          onStatusChange={(value) => setFilterStatus(value)}
          onPriorityChange={(value) => setFilterPriority(value)}
        />

        <TaskSorting
          sortBy={sortBy}
          sortOrder={sortOrder}
          onSortByChange={(value) => setSortBy(value)}
          onSortOrderChange={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
        />
      </FilterSection>

      <Grid container spacing={2}>
        {filteredTasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onEdit={handleEdit}
            onDelete={handleDeleteClick}
          />
        ))}
      </Grid>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <TaskForm editingTask={editingTask} onClose={() => setOpenDialog(false)} />
      </Dialog>

      <DeleteConfirmDialog
        open={openDeleteDialog}
        onClose={() => setOpenDeleteDialog(false)}
        onConfirm={handleConfirmDelete}
      />
    </Box>
  );
};

export default TaskList;
