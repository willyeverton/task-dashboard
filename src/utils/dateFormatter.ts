/**
 * Provides utility functions for formatting dates.
 */
export const dateFormatter = {
  toLocalDateTime: (date: Date | string | null | undefined): string => {
    if (!date) return 'Invalid Date';
    const d = new Date(date);
    return d instanceof Date && !isNaN(d.getTime())
      ? d.toLocaleString()
      : 'Invalid Date';
  },

  // Formats a date to a string in the format "yyyy-mm-ddThh:mm".
  toInputDateTime: (date: Date | string): string => {
    const d = new Date(date);
    return d.toISOString().slice(0, 16);
  },

  isOverdue: (date: Date | string | null | undefined): boolean => {
    if (!date) return false;
    const d = new Date(date);
    return d instanceof Date && !isNaN(d.getTime())
      ? d.getTime() < Date.now()
      : false;
  }
};
