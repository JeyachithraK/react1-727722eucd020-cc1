import React from 'react';
import Counter from './Counter';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Counter />
      </div>
    </ThemeProvider>
  );
};
export default App;
