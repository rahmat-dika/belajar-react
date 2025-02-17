import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import { StrictMode } from "react";
import TodoList from "../03-todolist/TodoList";

createRoot(document.getElementById("root"))
  .render(
    <StrictMode>
      <HelloWorld/>
      <TodoList/>
    </StrictMode>
  )