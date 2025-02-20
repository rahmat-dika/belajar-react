import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import StateCounter from "./StateCounter";

createRoot(document.getElementById("root"))
  .render(
    <StrictMode>
      <StateCounter/>
    </StrictMode>
  )