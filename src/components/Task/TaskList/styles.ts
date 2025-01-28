
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const FilterSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: 16,
  marginBottom: 16,
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column'
  }
}));
