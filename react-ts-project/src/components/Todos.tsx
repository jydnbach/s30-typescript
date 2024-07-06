import React, { useContext } from 'react';

import classes from './Todos.module.css';
import TodoItem from './TodoItem';

import { TodosContext } from '../store/todos-context';

//fc: function component. you build your own props bw brackets
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
