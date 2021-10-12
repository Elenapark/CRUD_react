import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/index.js';

import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Theme from './styles/Theme';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <ThemeProvider theme={Theme}>
      <Routes />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
