import { render, fireEvent } from '@testing-library/react';
import { TaskCard } from '../TaskCard';
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

  test('renders task information correctly', () => {
    const { getByText } = render(
      <TaskCard
        task={mockTask}
        onEdit={() => { }}
        onDelete={() => { }}
      />
    );

    expect(getByText('Test Task')).toBeTruthy();
    expect(getByText('Test Description')).toBeTruthy();
  });
});
