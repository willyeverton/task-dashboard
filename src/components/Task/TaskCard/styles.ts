
import { styled } from '@mui/material/styles';
import { Box, Card } from '@mui/material';


/**
 * A styled `Card` component that takes up the full height of its container.
 */
export const StyledCard = styled(Card)({
  height: '100%'
});

/**
 * A styled `Box` component that provides padding for the content within a `Card`.
 */
export const CardContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2)
}));

/**
 * A styled `Box` component that provides a container for buttons with a consistent gap and margin.
 */
export const ButtonContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  display: 'flex',
  gap: theme.spacing(1),
}));
