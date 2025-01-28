export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'Pendente' | 'Em progresso' | 'Concluída';
  priority: 'Baixa' | 'Média' | 'Alta';
  createdAt: Date;
  dueDate: string;
  responsible: string;
}

export interface TaskContextType {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (taskId: string) => void;
  editTask: (task: Task) => void;
  filterTasks: (status: string, priority: string) => Task[];
}

export interface TaskHeaderProps {
  onAddNew: () => void;
}

export interface TaskFiltersProps {
  filterStatus: string;
  filterPriority: string;
  onStatusChange: (value: string) => void;
  onPriorityChange: (value: string) => void;
}

export interface TaskSortingProps {
  sortBy: string;
  sortOrder: 'asc' | 'desc';
  onSortByChange: (value: string) => void;
  onSortOrderChange: () => void;
}

export interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (taskId: string) => void;
}

export interface DeleteConfirmDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export interface TaskFormProps {
  editingTask?: Task | null;
  onClose?: () => void;
}
