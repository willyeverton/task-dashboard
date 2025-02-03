import { styled } from '@mui/material/styles';
import { Box, FormControl, Select } from '@mui/material';

export const BoxSorting = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',

  [theme.breakpoints.down('sm')]: {
    width: '-webkit-fill-available'
  }
}));

export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '-webkit-fill-available'
  }
}));

export const StyledSelect = styled(Select)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '-webkit-fill-available',
    marginRight: theme.spacing(2)
  }
}));
