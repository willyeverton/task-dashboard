import React, { useState, useEffect } from 'react';
import { useTaskContext } from '../context/TaskContext';
import { Box, Dialog, Grid } from '@mui/material';
import { Task } from '../context/TaskContext';
import TaskForm from './TaskForm';
import { TaskHeader } from './TaskHeader';
import { TaskFilters } from './TaskFilters';
import { TaskSorting } from './TaskSorting';
import { TaskCard } from './TaskCard';
import { DeleteConfirmDialog } from './DeleteConfirmDialog';

const TaskList: React.FC = () => {
  const { tasks, removeTask, filterTasks } = useTaskContext();
  const [filteredTasks, setFilteredTasks] = useState<Task[]>(tasks);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [filterStatus, setFilterStatus] = useState<string>('');
  const [filterPriority, setFilterPriority] = useState<string>('');

  useEffect(() => {
    setFilteredTasks(tasks);
  }, [tasks]);

  const handleFilter = () => {
    const filtered = filterTasks(filterStatus, filterPriority);
    setFilteredTasks(filtered);
  };

  useEffect(() => {
    handleFilter();
  }, [filterStatus, filterPriority]);

  const handleEdit = (task: Task) => {
    setEditingTask(task);
    setOpenDialog(true);
  };

  const handleAddNew = () => {
    setEditingTask(null);
    setOpenDialog(true);
  };

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<string>('');

  const handleDeleteClick = (taskId: string) => {
    setTaskToDelete(taskId);
    setOpenDeleteDialog(true);
  };

  const handleConfirmDelete = () => {
    removeTask(taskToDelete);
    setOpenDeleteDialog(false);
  };


  const [sortBy, setSortBy] = useState<string>('createdAt');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const handleSort = (tasks: Task[]) => {
    return [...tasks].sort((a, b) => {
      switch (sortBy) {
        case 'title':
          return sortOrder === 'asc'
            ? a.title.localeCompare(b.title)
            : b.title.localeCompare(a.title);
        case 'priority':
          const priorityOrder = { 'Alta': 3, 'Média': 2, 'Baixa': 1 };
          return sortOrder === 'asc'
            ? priorityOrder[a.priority] - priorityOrder[b.priority]
            : priorityOrder[b.priority] - priorityOrder[a.priority];
        case 'dueDate':
          return sortOrder === 'asc'
            ? new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
            : new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime();
        default: // createdAt
          return sortOrder === 'asc'
            ? a.createdAt.getTime() - b.createdAt.getTime()
            : b.createdAt.getTime() - a.createdAt.getTime();
      }
    });
  };

  useEffect(() => {
    const sorted = handleSort(filteredTasks);
    setFilteredTasks(sorted);
  }, [sortBy, sortOrder]);

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
