import { createRoot } from "react-dom/client";
import HelloWorld from './../01-hello-world/HelloWorld';
import { StrictMode } from "react";
import Container from "../Container.jsx";
import TodoList from "./TodoList.jsx";

createRoot(document.getElementById("root"))
  .render(
    <StrictMode>
      <Container>
        <HelloWorld/>
        <TodoList/>
      </Container>
    </StrictMode>
  )