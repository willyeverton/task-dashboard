import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TaskSorting } from '../index';
import React from 'react';

describe('TaskSorting', () => {
  const defaultProps = {
    sortBy: 'createdAt',
    sortOrder: 'asc' as const,
    onSortByChange: jest.fn(),
    onSortOrderChange: jest.fn(),
  };

  it('handles sort field changes', () => {
    render(<TaskSorting {...defaultProps} />);

    const sortSelect = screen.getByRole('combobox');
    fireEvent.mouseDown(sortSelect);
    fireEvent.click(screen.getByText('Data de Vencimento'));

    expect(defaultProps.onSortByChange).toHaveBeenCalledWith('dueDate');
  });

  it('toggles sort order', () => {
    render(<TaskSorting {...defaultProps} />);

    const orderButton = screen.getByRole('button');
    fireEvent.click(orderButton);

    expect(defaultProps.onSortOrderChange).toHaveBeenCalled();
  });
});
