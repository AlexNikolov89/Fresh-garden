import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider } from 'styled-components';
import Homepage from './pages/Homepage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {GlobalStyle, theme} from './style/index';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Homepage />
      </ThemeProvider >
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


