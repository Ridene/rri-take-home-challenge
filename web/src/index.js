import React from 'react'
import ReactDOM from 'react-dom'
import Main from './app/Main'
import {history, store} from "./config/store";
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Main />
      </Router>
    </Provider>,
  document.getElementById('app')
)
