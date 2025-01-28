import React from 'react';
import { Box, Dialog, Grid } from '@mui/material';
import TaskForm from './TaskForm';
import { TaskHeader } from './TaskHeader';
import { TaskFilters } from './TaskFilters';
import { TaskSorting } from './TaskSorting';
import { TaskCard } from './TaskCard';
import { DeleteConfirmDialog } from './DeleteConfirmDialog';
import { useTaskListManager } from 'hooks/useTaskListManager';

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

      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        gap: 2,
        mb: 2
      }}>
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
      </Box>

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
