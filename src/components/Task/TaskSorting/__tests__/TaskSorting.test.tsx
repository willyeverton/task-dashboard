import { render, screen, fireEvent } from '@testing-library/react';
import { TaskSorting } from '../index';
import React from 'react';

describe('TaskSorting', () => {
  const mockProps = {
    sortBy: 'createdAt',
    sortOrder: 'desc' as const,
    onSortByChange: jest.fn(),
    onSortOrderChange: jest.fn()
  };

  it('handles sort criteria change', () => {
    render(<TaskSorting {...mockProps} />);
    fireEvent.change(screen.getByRole('combobox'), {
      target: { value: 'priority' }
    });
    expect(mockProps.onSortByChange).toHaveBeenCalledWith('priority');
  });
});
