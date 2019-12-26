import React from 'react';
import './App.css';
import Form from './components/Form';

const App = (props) => {
  return (
    <div className="App">
      <Form onSubmit={() => console.log('Hello There!')} />
    </div>
  );
};

export default App;
