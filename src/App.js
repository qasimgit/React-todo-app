import React, { useState } from "react";

import { Header } from "./components/header";
import { Input } from "./components/input";
import { Items } from "./components/items";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  console.log("todos", todos);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const removeTodo = (id) => {
    let updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const editTodo = (data) => {
    let todoIndex = todos.findIndex((ele) => ele.id === data.id);
    let newTodos = [...todos];
    newTodos[todoIndex] = data;
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <div className="cont-todo">
        <Header />
        <Input handleAddTodo={addTodo} />
        {todos.map((val, idx) => (
          <Items
            data={val}
            key={idx}
            handleEditTodo={editTodo}
            handleRemoveTodo={removeTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
