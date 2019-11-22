import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { addTodos } from './reducers/todos';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

store.dispatch(addTodos([{ id: 0, text: 'go to gym', completed: false }, { id: 1, text: 'go to work', completed: false }]));

