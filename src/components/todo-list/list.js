import React from "react";
import TodoItemComponent from "./todo-item/item";
import "./list.css";

const TodoListComponent = ({ todos, onChangeTodo, onDeleteTodo }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItemComponent
          todo={todo}
          key={todo.id}
          onChangeTodo={onChangeTodo}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoListComponent;