// App.js
import React, { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
import Filter from "./components/Filter";

function App() {

const [todos, setTodos] = useState(() => {
  const stored = localStorage.getItem("todos");
  return stored ? JSON.parse(stored) : [];
});

  const [filter, setFilter] = useState("all");
  const [message, setMessage] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
    setMessage("Todo item Created Successfully.");
    setTimeout(() => setMessage(""), 2000);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "incomplete") return !todo.completed;
    return true;
  });

  return (
    <div className="todo-wrapper mt-5">
      <h3 className="todo-title">
        ToDo List <i className="fas fa-clipboard-list"></i>
      </h3>
      <TodoInput onAdd={addTodo} />
      {message && <div className="success-message">{message}</div>}
      <Filter filter={filter} setFilter={setFilter} />
      <div className="todo-list">
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={deleteTodo}
            onToggle={toggleComplete}
            onUpdate={updateTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
