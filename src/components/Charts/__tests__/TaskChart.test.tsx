import { render, screen } from '@testing-library/react';
import { TaskChart } from '../TaskChart';
import React from 'react';

describe('TaskChart', () => {
  const mockTasks = [
    { status: 'Pendente', priority: 'Alta' },
    { status: 'Em progresso', priority: 'Média' },
    { status: 'Concluída', priority: 'Baixa' }
  ];

  it('renders chart with correct data', () => {
    render(<TaskChart tasks={mockTasks} />);
    expect(screen.getByText('Status das Tarefas')).toBeInTheDocument();
    expect(screen.getByText('Pendente')).toBeInTheDocument();
    expect(screen.getByText('Em progresso')).toBeInTheDocument();
    expect(screen.getByText('Concluída')).toBeInTheDocument();
  });
});
