import { styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';

export const BoxHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(2),

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  }
}));

export const BoxButtons = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'stretch'
  }
}));

export const StyledButton = styled(Button)(({ theme }) => ({

  [theme.breakpoints.down('sm')]: {
    width: '100%'
  }
}));
