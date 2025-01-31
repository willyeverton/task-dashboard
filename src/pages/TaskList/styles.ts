import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const FilterSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2),
  padding: theme.spacing(2),

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'stretch',
    padding: theme.spacing(1),
    gap: theme.spacing(2)
  }
}));

export const TaskGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: theme.spacing(2),

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
    gap: theme.spacing(1.5)
  }
}));
