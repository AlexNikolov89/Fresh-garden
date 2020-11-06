import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider } from 'styled-components';
import Homepage from './pages/Homepage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {GlobalStyle, theme} from './style/index';
import {Routes} from './routes/index'


ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider >
  </React.StrictMode>,
  document.getElementById('root')
);


