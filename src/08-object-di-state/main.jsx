import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import ObjectStateContact from "./ObjectStateContact";
import ImmerContact from "./ImmerContact";
import ArrayTask from "../09-array-di-state/ArrayTask";
import SharingStateTask from "../10-sharing-state/SharingStateTask";
import Counter from "../11-mempertahankan-state/Counter";

createRoot(document.getElementById("root"))
  .render(
    <StrictMode>
        <ObjectStateContact/>
        <ImmerContact/>
        <hr />
        <ArrayTask/>
        <hr />
        <SharingStateTask/>
        <hr />
        <Counter/>
    </StrictMode>
  )