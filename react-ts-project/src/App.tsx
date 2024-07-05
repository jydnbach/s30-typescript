import Todos from './components/Todo';
import Todo from './models/todo';

function App() {
  const todos = [new Todo('Learn React'), new Todo('Learn Typescript')];

  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
