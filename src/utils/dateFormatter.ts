export const dateFormatter = {
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

  toInputDateTime: (date: Date | string): string => {
    const d = new Date(date);
    return d.toISOString().slice(0, 16);
  },

  isOverdue: (dueDate: Date | string): boolean => {
    return new Date(dueDate) < new Date();
  }
};
