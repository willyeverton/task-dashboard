
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

/**
 * The `FilterSection` component is a styled `Box` component that provides a layout for a filter section in the TaskList component.
 * It displays the filters in a row layout on larger screens, and switches to a column layout on smaller screens (below the 'md' breakpoint).
 * The component uses the `theme` object to apply responsive styles.
 */
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
