import React from 'react';

const Todo = ({ id, text, onClick, completed }) => {
  const handleClick = () => onClick(id);
  
  return (
    <div 
      onClick={handleClick}
      style={{ textDecoration: completed ? 'line-through' : 'none' }}
    >
      {text}
    </div>
  );
};

export default Todo;