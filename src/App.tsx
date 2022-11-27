import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { observer } from "mobx-react";

import { todoStore } from "./stores/todoStore";

const App = observer(() => {
  const onAddTodo = () =>
    todoStore.addTodo(prompt("Enter a new todo:", "coffee plz") || "");

  return (
    <div>
      <div>{todoStore.report}</div>
      <ol>
        {todoStore.todos.map((todo, index) => (
          <li key={index}>{todo.task}</li>
        ))}
      </ol>

      <button onClick={onAddTodo}>New Todo</button>
    </div>
  );
});

export default App;
