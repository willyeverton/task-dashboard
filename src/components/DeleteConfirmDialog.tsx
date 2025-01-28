import { Box, Button, Dialog, Typography } from '@mui/material';
import React from 'react';

interface DeleteConfirmDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const DeleteConfirmDialog: React.FC<DeleteConfirmDialogProps> = ({
  open,
  onClose,
  onConfirm
}) => (
  <Dialog open={open} onClose={onClose}>
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Confirmar exclusão
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Deseja realmente excluir esta tarefa?
      </Typography>
      <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
        <Button onClick={onClose}>Cancelar</Button>
        <Button variant="contained" color="error" onClick={onConfirm}>
          Excluir
        </Button>
      </Box>
    </Box>
  </Dialog>
);
