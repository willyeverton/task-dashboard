import { render, screen, fireEvent } from '@testing-library/react';
import { TaskFilters } from '../index';
import React from 'react';

describe('TaskFilters', () => {
  const mockProps = {
    filterStatus: '',
    filterPriority: '',
    onStatusChange: jest.fn(),
    onPriorityChange: jest.fn()
  };

  it('handles status filter change', () => {
    render(<TaskFilters {...mockProps} />);
    fireEvent.change(screen.getByLabelText(/status/i), {
      target: { value: 'Pendente' }
    });
    expect(mockProps.onStatusChange).toHaveBeenCalledWith('Pendente');
  });
});
