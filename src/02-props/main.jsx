import { createRoot } from "react-dom/client";
import LatProps from "./Props";
import { StrictMode } from "react";
import Container from './Container';

createRoot(document.getElementById("root"))
  .render(
    <StrictMode>
      <Container>
        <LatProps/>
      </Container>
    </StrictMode>
  )