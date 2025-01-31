import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TaskProvider, useTaskContext } from '../TaskContext';
import React from 'react';

const TestComponent = () => {
  const { tasks } = useTaskContext();
  return <div>Task Count: {tasks.length}</div>;
};

describe('TaskContext', () => {
  it('provides task management functionality', () => {
    render(
      <TaskProvider>
        <TestComponent />
      </TaskProvider>
    );

    expect(screen.getByText('Task Count: 0')).toBeInTheDocument();
  });
});
