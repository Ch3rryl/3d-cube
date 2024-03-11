import React from "react";
import ReactDOM from "react-dom";
import { Canvas } from "react-three-fiber";
import App from "./App";



const rootElement = document.getElementById("root");
ReactDOM.render(
  <Canvas>
    <App />
  </Canvas>,
  rootElement
);


