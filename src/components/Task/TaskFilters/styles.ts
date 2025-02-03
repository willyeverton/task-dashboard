import { styled } from '@mui/material/styles';
import { Box, FormControl, Select } from '@mui/material';

export const BoxFilters = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '6px',
  flexWrap: 'wrap',
  flexDirection: 'row',

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'stretch',
    width: '-webkit-fill-available'
  }

}));
export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  minWidth: 120,

  [theme.breakpoints.down('sm')]: {
    width: '-webkit-fill-available',
  }
}));

export const StyledSelect = styled(Select)(({ theme }) => ({

  [theme.breakpoints.down('sm')]: {
    width: '-webkit-fill-available'
  }
}));

export const StyledFieldset = styled('fieldset')(({ theme }) => ({
  border: '1px solid #ddd',
  borderRadius: '4px',
  width: 'max-content',

  [theme.breakpoints.down('sm')]: {
    width: '-webkit-fill-available',
  },
}));
