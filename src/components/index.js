import React, { useState, useEffect } from "react";
import TodoInputComponent from "./todo-input/input";
import TodoListComponent from "./todo-list/list";
import "./index.css";

let nextId = 1;
const initialTodos = [{ id: 0, title: "You can edit text" }];

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  const handleAddTodo = (title) => {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        date: new Date().toDateString(),
      },
    ]);
  };

  const handleChangeTodo = (nextTodo) => {
    setTodos(todos.map((t) => (t.id === nextTodo.id ? nextTodo : t)));
  };

  const handleDeleteTodo = (todoId) => {
    setTodos(todos.filter((t) => t.id !== todoId));
  };

  const handleSearch = (searchText) => {
    const filtered = todos.filter((todo) =>
      todo.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredTodos(filtered);
  };

  const handleClearSearch = () => {
    setFilteredTodos(todos);
  };

  return (
    <div className="app">
      <TodoInputComponent
        onAddTodo={handleAddTodo}
        onSearch={handleSearch}
        onClearSearch={handleClearSearch}
      />
      <TodoListComponent
        todos={filteredTodos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}

export default App;