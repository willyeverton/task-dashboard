/**
 * Provides utility functions for formatting dates.
 */
export const dateFormatter = {
  // Formats a date to a string in the format "dd/mm/yyyy".
  toLocalDateTime: (date: Date | string): string => {
    const d = new Date(date);
    return d.toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  },

  // Formats a date to a string in the format "yyyy-mm-ddThh:mm".
  toInputDateTime: (date: Date | string): string => {
    const d = new Date(date);
    return d.toISOString().slice(0, 16);
  },

  // Checks if a date is overdue (i.e., before the current date).
  isOverdue: (dueDate: Date | string): boolean => {
    return new Date(dueDate) < new Date();
  }
};
