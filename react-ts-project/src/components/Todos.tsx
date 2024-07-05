import React from 'react';
import TodoItem from './TodoItem';
import Todo from '../models/todo';

//fc: function component. you build your own props bw brackets
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
