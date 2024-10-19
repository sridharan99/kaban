import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Apps';
import { store } from './redux/store'
import '.public/public/index.html';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>

    <App />
  </Provider>
);