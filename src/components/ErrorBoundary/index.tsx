import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Box, Typography, Button } from '@mui/material';

/**
 * Defines the props for the `ErrorBoundary` component.
 *
 * @property {ReactNode} children - The child components to be rendered within the `ErrorBoundary`.
 */
interface Props {
  children: ReactNode;
}

/**
 * Defines the state of the `ErrorBoundary` component.
 *
 * @property {boolean} hasError - Indicates whether an error has occurred.
 * @property {Error | null} error - The error that occurred, or `null` if no error has occurred.
 */
interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * Defines an error boundary component that catches and handles errors in its child components.
 * When an error occurs, it displays a user-friendly error message and provides a button to reset the state.
 */
export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  /**
   * Handles the state update when an error occurs in the child components.
   * This static method is called by React when an error is thrown by a descendant component.
   * It updates the component's state to indicate that an error has occurred and stores the error object.
   *
   * @param error - The error that occurred.
   * @returns The updated state object with `hasError` set to `true` and the `error` set to the provided `error` object.
   */
  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  /**
   * Logs the error and error information when an error is caught by the `ErrorBoundary` component.
   *
   * @param error - The error that occurred.
   * @param errorInfo - Additional information about the error.
   */
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) { }

  /**
   * Resets the error state of the `ErrorBoundary` component, allowing the child components to be re-rendered.
   */
  private handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  /**
   * Renders the ErrorBoundary component's UI based on the current error state.
   * If an error has occurred, it displays a user-friendly error message and a button to reset the state.
   * Otherwise, it renders the child components.
   */
  public render() {
    if (this.state.hasError) {
      return (
        <Box sx={{ p: 3, textAlign: 'center' }}>
          <Typography variant="h5" color="error" gutterBottom>
            Algo deu errado
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {this.state.error?.message}
          </Typography>
          <Button variant="contained" onClick={this.handleReset}>
            Tentar Novamente
          </Button>
        </Box>
      );
    }

    return this.props.children;
  }
}
