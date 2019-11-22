import React from 'react';
import { connect } from 'react-redux';
import Todo from './components/Todo';
import './App.css';
import { toggleTodo } from './reducers/todos';

const App = ({ todos, toggleTodo }) => {
  return (
    <div className="App">
      {
        todos.map((todos) => <Todo key={todos.id} {...todos} onClick={toggleTodo} />)
      }
    </div>
  );
};

App.defaultProps = {
  todos: [],
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: (id) => dispatch(toggleTodo(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
