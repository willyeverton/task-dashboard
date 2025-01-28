
import { styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';

export const FormContainer = styled(Box)({
  padding: 16
});

export const ButtonGroup = styled(Box)({
  display: 'flex',
  gap: 16,
  flexWrap: 'wrap',
  marginTop: 16
});

export const StyledButton = styled(Button)({
  flex: 1,
  minWidth: '200px',
  width: '100%',
});
