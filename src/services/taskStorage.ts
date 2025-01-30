/**
 * Provides an interface for saving and loading tasks to/from the browser's local storage.
 */
export const taskStorage = {
  // Saves the given tasks to the local storage.
  save: (tasks: Task[]) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  },

  // Loads tasks from the local storage.
  load: (): Task[] => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  }
};
