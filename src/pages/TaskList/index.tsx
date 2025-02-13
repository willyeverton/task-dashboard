import React from 'react';
import { Box, Dialog } from '@mui/material';
import { useTaskListManager } from 'hooks/useTaskListManager';
import { FilterSection, TaskGrid } from './styles';
import { TaskHeader } from 'components/Task/TaskHeader';
import { TaskSorting } from 'components/Task/TaskSorting';
import { TaskCard } from 'components/Task/TaskCard';
import TaskForm from 'components/Task/TaskForm';
import { DeleteConfirmDialog } from 'components/DeleteConfirmDialog';
import TaskFilters from 'components/Task/TaskFilters';

/**
 * The `TaskList` component is responsible for rendering the main task list view, including the task header, filters, sorting options, and the list of task cards.
 *
 * @returns A React functional component that renders the task list view.
 */
const TaskList: React.FC = () => {

  const {
    editingTask,
    openDialog,
    filterStatus,
    filterPriority,
    sortOrder,
    sortBy,
    openDeleteDialog,
    filteredAndSortedTasks,
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

      <TaskGrid>
        {filteredAndSortedTasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onEdit={handleEdit}
            onDelete={handleDeleteClick}
          />
        ))}
      </TaskGrid>

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
