import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TaskCard } from '../index';
import React from 'react';

describe('TaskCard', () => {
  const mockTask = {
    id: '1',
    title: 'Test Task',
    description: 'Test Description',
    status: 'Pendente',
    priority: 'Alta',
    responsible: 'John Doe',
    createdAt: new Date('2024-01-01T10:00:00'),
    dueDate: '2024-02-01T10:00:00'
  };

  const mockOnEdit = jest.fn();
  const mockOnDelete = jest.fn();

  it('renders task information correctly', () => {
    render(
      <TaskCard
        task={mockTask as Task}
        onEdit={mockOnEdit}
        onDelete={mockOnDelete}
      />
    );

    expect(screen.getByText('Test Task')).toBeInTheDocument();
    expect(screen.getByText(/Alta/)).toBeInTheDocument();
    expect(screen.getByText(/John Doe/)).toBeInTheDocument();
    expect(screen.getByText(/Pendente/)).toBeInTheDocument();
    expect(screen.getByText(/01\/01\/2024/)).toBeInTheDocument();
  });

  it('calls onEdit when edit button is clicked', () => {
    render(
      <TaskCard
        task={mockTask as Task}
        onEdit={mockOnEdit}
        onDelete={mockOnDelete}
      />
    );

    fireEvent.click(screen.getByText('Editar'));
    expect(mockOnEdit).toHaveBeenCalledWith(mockTask);
  });
});
