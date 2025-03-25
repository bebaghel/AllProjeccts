import React from 'react';
import { SnackbarProvider } from 'notistack';
import Button from '@mui/material/Button';
import { useSnackbar } from 'notistack';

function App() {
  return (
    <SnackbarProvider maxSnack={3}> {/* Maximum number of snackbars that can be shown at once */}
      <MyComponent />
    </SnackbarProvider>
  );
}

const MyComponent = () => {
  const { enqueueSnackbar } = useSnackbar(); // Hook to trigger snackbars

  const handleClick = () => {
    enqueueSnackbar('This is a success message!', { variant: 'success' });
  };

  return (
    <Button onClick={handleClick}>Show Snackbar</Button>
    
  );
}

export default App;
