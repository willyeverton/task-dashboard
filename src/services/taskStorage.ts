import { Task } from "types/task.types";

export const taskStorage = {
  save: (tasks: Task[]) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  },

  load: (): Task[] => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  }
};
