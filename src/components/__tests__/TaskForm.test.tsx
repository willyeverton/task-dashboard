import { render, screen, fireEvent } from '@testing-library/react';
import TaskForm from '../TaskForm';
import { TaskProvider } from '../../context/TaskContext';
import React from 'react';

test('deve adicionar uma tarefa corretamente', () => {
  render(
    <TaskProvider>
      <TaskForm />
    </TaskProvider>
  );

  fireEvent.change(screen.getByLabelText(/Título/i), { target: { value: 'Tarefa 1' } });
  fireEvent.change(screen.getByLabelText(/Descrição/i), { target: { value: 'Descrição da tarefa' } });
  fireEvent.change(screen.getByLabelText(/Responsável/i), { target: { value: 'Carlos' } });
  fireEvent.change(screen.getByLabelText(/Data de vencimento/i), { target: { value: '2025-01-30' } });

  fireEvent.click(screen.getByText(/Adicionar Tarefa/i));

  // Teste de confirmação, como a presença da nova tarefa na lista
  expect(screen.getByText(/Tarefa 1/)).toBeTruthy();
});
