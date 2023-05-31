import React from "react";
import "./App.css";
import BoxList from "./BoxList";
import ToDoList from "./ToDo/ToDoList";

function App() {
  const locallySavedTodos = JSON.parse(localStorage.getItem('userToDoList'))
  let existingTodos;
  if (locallySavedTodos) {
    existingTodos = locallySavedTodos;
  }

  return (
    <div className="App">
      <h3>Adding new boxes using a form</h3>
      <BoxList />
      <h3>Dodo list app</h3>
      <ToDoList existingTodos={existingTodos} />
    </div>
  );
}

export default App;
