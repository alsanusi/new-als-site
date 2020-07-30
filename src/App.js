import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import './App.css';
import Index from './views/Index';
import AboutMe from './views/Aboutme';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";

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
        <Router>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/about-me" component={AboutMe} />
          </Switch>
        </Router>
        </div>
      </ThemeProvider>
  );
}

export default App;
