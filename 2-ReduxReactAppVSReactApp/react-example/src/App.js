import React, { Component } from 'react';
import Todo from './components/Todo';
import './App.css';

export default class App extends Component {
  state = { todos: [] }

  componentDidMount = () => {
    this.setState({ todos: [
      { id: 0, text: 'go to gym', completed: false },
      { id: 1, text: 'go to work', completed: false },
    ]});
  }

  toggleTodo = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo
      }),
    });
  }

  render () {
    const { todos } = this.state;
    return (
      <div className="App">
        {
          todos.map((todos) => <Todo key={todos.id} {...todos} onClick={this.toggleTodo} />)
        }
      </div>
    );
  }
};

