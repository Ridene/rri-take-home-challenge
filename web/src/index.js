import React from 'react'
import ReactDOM from 'react-dom'
import Main from './app/Main'
import {history, store} from "./config/store";
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
  document.getElementById('app')
)
