import { render, screen, fireEvent } from '@testing-library/react';
import TaskForm from '../index';
import React, { createContext } from 'react';

describe('TaskForm', () => {
  const TaskContext = createContext<TaskContextType | undefined>(undefined);
  const mockClose = jest.fn();
  const mockContextValue = {
    addTask: jest.fn(),
    editTask: jest.fn(),
    tasks: [],
    removeTask: jest.fn(),
    filterTasks: jest.fn()
  };

  it('submits form with valid data', () => {
    render(
      <TaskContext.Provider value={mockContextValue}>
        <TaskForm onClose={mockClose} />
      </TaskContext.Provider>
    );

    fireEvent.change(screen.getByLabelText('Título'), {
      target: { value: 'New Task' }
    });
    fireEvent.change(screen.getByLabelText('Descrição'), {
      target: { value: 'Task Description' }
    });

    fireEvent.click(screen.getByText('Adicionar Tarefa'));
    expect(mockContextValue.addTask).toHaveBeenCalled();
  });
});
