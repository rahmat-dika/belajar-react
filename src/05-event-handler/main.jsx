import { createRoot } from "react-dom/client";
import AlertButton from "./AlertButton";
import { StrictMode } from "react";
import EventDariProps from "./eventDariProps";
import Toolbar from './EventPropagation';
import FormPreventDefault from './PreventDefault';
import SayHelloSideEffect from "../06-side-effect/SayHelloSideEffect";

createRoot(document.getElementById("root"))
  .render(
    <StrictMode>
      <AlertButton text="Click Me"/>
      <br />
      <EventDariProps text="Click Cok" onSmash={() => alert("You Smash Me COKKK")}/>
        <br /><br />
        {/* digunakan untuk event propagation dimana event tidak terpengaruh dengan parent nya. Digunakan di stopPropagation */}
      <Toolbar onClick={(e) => {
        e.stopPropagation();
        alert("You click toolbar");
      }}/>

      <FormPreventDefault/>

      <SayHelloSideEffect/>
    </StrictMode>
  )