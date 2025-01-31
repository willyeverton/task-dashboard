import { render, screen, fireEvent } from '@testing-library/react';
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
    dueDate: new Date().toISOString(),
    createdAt: new Date()
  } as Task;

  const mockHandlers = {
    onEdit: jest.fn(),
    onDelete: jest.fn()
  };

  it('renders task information correctly', () => {
    render(<TaskCard task={mockTask} {...mockHandlers} />);

    expect(screen.getByText(mockTask.title)).toBeInTheDocument();
    expect(screen.getByText(mockTask.description)).toBeInTheDocument();
    expect(screen.getByText(`Status: ${mockTask.status}`)).toBeInTheDocument();
  });

  it('calls edit handler when edit button is clicked', () => {
    render(<TaskCard task={mockTask} {...mockHandlers} />);

    fireEvent.click(screen.getByText('Editar'));
    expect(mockHandlers.onEdit).toHaveBeenCalledWith(mockTask);
  });
});
