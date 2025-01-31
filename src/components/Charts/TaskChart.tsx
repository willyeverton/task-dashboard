import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

export const TaskChart = ({ tasks }) => {
  const statusData = [
    { name: 'Pendente', value: tasks.filter(t => t.status === 'Pendente').length },
    { name: 'Em progresso', value: tasks.filter(t => t.status === 'Em progresso').length },
    { name: 'Concluída', value: tasks.filter(t => t.status === 'Concluída').length },
  ];

  const COLORS = ['#FF8042', '#00C49F', '#0088FE'];

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Status das Tarefas</Typography>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={statusData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {statusData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
