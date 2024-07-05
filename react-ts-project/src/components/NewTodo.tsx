const NewTodo = () => {
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <lable htmlFor="text">Todo text</lable>
      <input type="text" id="text" />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
