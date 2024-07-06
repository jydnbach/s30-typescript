import React, { useState, ReactNode } from 'react';
import Todo from '../models/todo';

// Define the shape of the context object
type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

// Define the props for the provider component
type TodosContextProviderProps = {
  children: ReactNode;
};

// Create the context with an initial value
export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: () => {},
});

const TodosContextProvider = ({ children }: TodosContextProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Handler to add a new todo
  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => prevTodos.concat(newTodo));
  };

  // Handler to remove a todo by id
  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  // Context value that will be supplied to the consuming components
  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
