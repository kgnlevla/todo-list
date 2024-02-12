import React, { useState } from "react";
import ReactDOM from "react-dom";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (input) {
      setTodos([...todos, input]);
      setInput("");
    }
  }

  function handleDelete(index) {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
  }

  return (
    <div className="container">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Enter a new todo"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.length > 0 ? (
          todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))
        ) : (
          <li>No todo yet</li>
        )}
      </ul>
    </div>
  );
}

ReactDOM.render(<TodoList />, document.getElementById("root"));
