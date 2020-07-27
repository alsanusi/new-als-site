import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import './App.css';
import Index from './views/Index'

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Raleway',
      'sans-serif'
    ].join(','),
  }
});


function App() {
  return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Index />
        </div>
      </ThemeProvider>
  );
}

export default App;
