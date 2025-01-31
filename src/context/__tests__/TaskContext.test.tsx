import { render, act } from '@testing-library/react';
import { useTaskContext, TaskProvider } from '../TaskContext';
import React from 'react';

describe('TaskContext', () => {
  it('provides task management functionality', () => {
    const TestComponent = () => {
      const { tasks, addTask } = useTaskContext();
      return (
        <div>
          <span>Task Count: {tasks.length}</span>
          <button onClick={() => addTask({
            id: '1',
            title: 'Test Task',
            description: 'Description',
            status: 'Pendente',
            priority: 'Alta',
            responsible: 'Tester',
            dueDate: new Date().toISOString(),
            createdAt: new Date()
          })}>Add Task</button>
        </div>
      );
    };

    const { getByText } = render(
      <TaskProvider>
        <TestComponent />
      </TaskProvider>
    );

    expect(getByText('Task Count: 0')).toBeInTheDocument();
  });
});
