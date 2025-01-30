import { Box, Button, Dialog, Typography } from '@mui/material';
import React from 'react';

/**
 * A React component that displays a confirmation dialog for deleting a task.
 *
 * @param open - A boolean indicating whether the dialog should be displayed.
 * @param onClose - A function to be called when the dialog is closed.
 * @param onConfirm - A function to be called when the user confirms the deletion.
 */
export const DeleteConfirmDialog = React.memo<DeleteConfirmDialogProps>(({
  open,
  onClose,
  onConfirm
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Confirmar exclusão
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Deseja realmente excluir esta tarefa?
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
          <Button variant="contained" color="error" onClick={onConfirm}>
            Excluir
          </Button>
          <Button onClick={onClose}>Cancelar</Button>
        </Box>
      </Box>
    </Dialog>
  )
});
