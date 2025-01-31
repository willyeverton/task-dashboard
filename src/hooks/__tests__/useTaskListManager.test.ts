import { useTaskListManager } from '../useTaskListManager';

describe('useTaskListManager', () => {
  it('filters tasks by status', () => {
    const { filterStatus, setFilterStatus } = useTaskListManager();

    setFilterStatus('Pendente');

    expect(filterStatus).toBe('Pendente');
  });

  it('sorts tasks correctly', () => {
    const { sortBy, setSortBy, sortOrder, setSortOrder } = useTaskListManager();

    setSortBy('priority');
    setSortOrder('desc');

    expect(sortBy).toBe('priority');
    expect(sortOrder).toBe('desc');
  });
});
