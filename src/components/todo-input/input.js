import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import "./input.css";

const TodoInputComponent = ({ onAddTodo, onSearch, onClearSearch }) => {
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [searchText, setSearchText] = useState("");

  const handleAddTodo = () => {
    onAddTodo(newTodoTitle);
    setNewTodoTitle("");
  };

  const handleSearch = () => {
    onSearch(searchText);
  };

  const handleClearSearch = () => {
    onClearSearch();
    setSearchText("");
  };

  return (
    <div className="todo-input">
      <input
        type="text"
        placeholder="Add item"
        value={newTodoTitle}
        onChange={(e) => setNewTodoTitle(e.target.value)}
      />
      <button type="button" className="add" onClick={handleAddTodo}>
        Add
      </button>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <span className="clear-search" onClick={handleClearSearch}>
          <FontAwesomeIcon icon={faXmark} />
        </span>
      </div>

      <button className="search" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default TodoInputComponent;