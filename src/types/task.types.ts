/**
 * Represents a task in the application.
 * @property {string} id - The unique identifier for the task.
 * @property {string} title - The title of the task.
 * @property {string} description - The description of the task.
 * @property {'Pendente' | 'Em progresso' | 'Concluída'} status - The current status of the task.
 * @property {'Baixa' | 'Média' | 'Alta'} priority - The priority of the task.
 * @property {Date} createdAt - The date and time when the task was created.
 * @property {string} dueDate - The due date for the task.
 * @property {string} responsible - The person responsible for the task.
 */
interface Task {
  id: string;
  title: string;
  description: string;
  status: 'Pendente' | 'Em progresso' | 'Concluída';
  priority: 'Baixa' | 'Média' | 'Alta';
  createdAt: Date;
  dueDate: string;
  responsible: string;
}

/**
 * Represents the context for managing tasks in the application.
 * @property {Task[]} tasks - The list of tasks.
 * @property {(task: Task) => void} addTask - Function to add a new task.
 * @property {(taskId: string) => void} removeTask - Function to remove a task by its ID.
 * @property {(task: Task) => void} editTask - Function to edit an existing task.
 * @property {(status: string, priority: string) => Task[]} filterTasks - Function to filter the tasks by status and priority.
 */
interface TaskContextType {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (taskId: string) => void;
  editTask: (task: Task) => void;
  filterTasks: (status: string, priority: string) => Task[];
}

/**
 * Represents the props for the task header component.
 * @property {() => void} onAddNew - A function to be called when the user wants to add a new task.
 */
interface TaskHeaderProps {
  onAddNew: () => void;
}

/**
 * Represents the props for the task filters component.
 * @property {string} filterStatus - The current status filter value.
 * @property {string} filterPriority - The current priority filter value.
 * @property {(value: string) => void} onStatusChange - A function to be called when the status filter value changes.
 * @property {(value: string) => void} onPriorityChange - A function to be called when the priority filter value changes.
 */
interface TaskFiltersProps {
  filterStatus: string;
  filterPriority: string;
  onStatusChange: (value: string) => void;
  onPriorityChange: (value: string) => void;
}

/**
 * Represents the props for the task sorting component.
 * @property {string} sortBy - The current sorting field.
 * @property {'asc' | 'desc'} sortOrder - The current sorting order.
 * @property {(value: string) => void} onSortByChange - A function to be called when the sorting field changes.
 * @property {() => void} onSortOrderChange - A function to be called when the sorting order changes.
 */
interface TaskSortingProps {
  sortBy: string;
  sortOrder: 'asc' | 'desc';
  onSortByChange: (value: string) => void;
  onSortOrderChange: () => void;
}

/**
 * Represents the props for the task card component.
 * @property {Task} task - The task to be displayed.
 * @property {(task: Task) => void} onEdit - A function to be called when the user wants to edit the task.
 * @property {(taskId: string) => void} onDelete - A function to be called when the user wants to delete the task.
 */
interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (taskId: string) => void;
}

/**
 * Represents the props for the delete confirmation dialog.
 * @property {boolean} open - Indicates whether the dialog is open or not.
 * @property {() => void} onClose - A function to be called when the dialog is closed.
 * @property {() => void} onConfirm - A function to be called when the user confirms the deletion.
 */
interface DeleteConfirmDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

/**
 * Represents the props for the task form component.
 * @property {Task | null} editingTask - The task being edited, if any.
 * @property {() => void} onClose - A function to be called when the form is closed.
 */
interface TaskFormProps {
  editingTask?: Task | null;
  onClose?: () => void;
}
