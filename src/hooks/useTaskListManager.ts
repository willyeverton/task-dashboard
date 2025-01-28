import { useTaskContext } from "context/TaskContext";
import { useEffect, useState } from "react";
import { Task } from "types/task.types";

export const useTaskListManager = () => {
  const { tasks, removeTask, filterTasks } = useTaskContext();
  const [filteredTasks, setFilteredTasks] = useState<Task[]>(tasks);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [filterStatus, setFilterStatus] = useState<string>('');
  const [filterPriority, setFilterPriority] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('createdAt');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<string>('');


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

  const handleDeleteClick = (taskId: string) => {
    setTaskToDelete(taskId);
    setOpenDeleteDialog(true);
  };

  const handleConfirmDelete = () => {
    removeTask(taskToDelete);
    setOpenDeleteDialog(false);
  };

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

  return {
    filteredTasks,
    editingTask,
    openDialog,
    filterStatus,
    filterPriority,
    sortBy,
    sortOrder,
    openDeleteDialog,
    handleEdit,
    handleAddNew,
    handleDeleteClick,
    handleConfirmDelete,
    setFilterStatus,
    setFilterPriority,
    setSortBy,
    setSortOrder,
    setOpenDialog,
    setOpenDeleteDialog
  };
};
