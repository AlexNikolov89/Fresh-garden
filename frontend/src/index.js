import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'styled-components';
import {GlobalStyle, theme} from './style/index';
import {Routes} from './routes/index'
import {Provider} from "react-redux";
import store from "./store";


ReactDOM.render(
  <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);


