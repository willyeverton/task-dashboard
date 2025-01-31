
import { styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';

/**
 * A styled Box component that serves as the container for the TaskForm.
 * It applies a padding of 16 pixels to the container.
 */
export const FormContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2)
}));

/**
 * A styled Box component that serves as a container for a group of buttons.
 * It applies a display of 'flex', a gap of 16 pixels between the buttons,
 * wraps the buttons to the next line if needed, and adds a margin-top of 16 pixels.
 */
export const ButtonGroup = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  display: 'flex',
  gap: theme.spacing(2),
  flexWrap: 'wrap'
}));

/**
 * A styled Button component that is used within the ButtonGroup component.
 * It has a flex value of 1, a minimum width of 200 pixels, and a width of 100%.
 * This ensures the button takes up the available space within the ButtonGroup.
 */
export const StyledButton = styled(Button)({
  flex: 1,
  minWidth: '200px',
  width: '100%',
});
