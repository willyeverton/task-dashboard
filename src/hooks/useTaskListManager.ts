import { useTaskContext } from "context/TaskContext";
import { useCallback, useEffect, useState } from "react";

/**
 * The `useTaskListManager` hook is responsible for managing the state and functionality related to the task list in the application.
 * It provides various utilities for filtering, sorting, editing, and deleting tasks, as well as handling the state of the task list and related UI elements.
 *
 * The hook returns an object with the following properties and methods:
 * - `filteredTasks`: An array of tasks that have been filtered based on the current filter settings.
 * - `editingTask`: The task that is currently being edited, or `null` if no task is being edited.
 * - `openDialog`: A boolean indicating whether the task editing dialog is currently open.
 * - `filterStatus`: The current filter status, which can be used to filter tasks by their status.
 * - `filterPriority`: The current filter priority, which can be used to filter tasks by their priority.
 * - `sortBy`: The current sort criteria, which can be used to sort the tasks.
 * - `sortOrder`: The current sort order, which can be either 'asc' or 'desc'.
 * - `openDeleteDialog`: A boolean indicating whether the task deletion dialog is currently open.
 * - `handleEdit`: A function that sets the `editingTask` and opens the task editing dialog.
 * - `handleAddNew`: A function that sets the `editingTask` to `null` and opens the task editing dialog.
 * - `handleDeleteClick`: A function that sets the `taskToDelete` and opens the task deletion dialog.
 * - `handleConfirmDelete`: A function that removes the task with the `taskToDelete` ID and closes the task deletion dialog.
 * - `setFilterStatus`: A function that sets the `filterStatus` state.
 * - `setFilterPriority`: A function that sets the `filterPriority` state.
 * - `setSortBy`: A function that sets the `sortBy` state.
 * - `setSortOrder`: A function that sets the `sortOrder` state.
 * - `setOpenDialog`: A function that sets the `openDialog` state.
 * - `setOpenDeleteDialog`: A function that sets the `openDeleteDialog` state.
 */
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

  // Handle sort change
  useEffect(() => {
    setFilteredTasks(tasks);
  }, [tasks]);

  // Handle filter change
  const handleFilter = useCallback(() => {
    const filtered = filterTasks(filterStatus, filterPriority);
    setFilteredTasks(filtered);
  }, [filterStatus, filterPriority, filterTasks]);


  // Filter tasks when filter status or priority changes
  useEffect(() => {
    handleFilter();
  }, [filterStatus, filterPriority]);

  // Handle edit click
  const handleEdit = useCallback((task: Task) => {
    setEditingTask(task);
    setOpenDialog(true);
  }, []);

  // Handle add new click
  const handleAddNew = useCallback(() => {
    setEditingTask(null);
    setOpenDialog(true);
  }, []);

  // Handle delete click
  const handleDeleteClick = useCallback((taskId: string) => {
    setTaskToDelete(taskId);
    setOpenDeleteDialog(true);
  }, []);

  // Handle delete confirmation
  const handleConfirmDelete = useCallback(() => {
    removeTask(taskToDelete);
    setOpenDeleteDialog(false);
  }, [taskToDelete, removeTask]);

  // Sorting logic
  const handleSort = useCallback((tasks: Task[]) => {
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
  }, [sortBy, sortOrder]);

  // Sort tasks whenever sortBy or sortOrder changes
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
