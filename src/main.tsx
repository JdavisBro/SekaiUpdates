import "preact/debug"; 
import { render } from "preact";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root")

if (!container) {
  throw Error("No Root")
}

render(
  <App />,
  container
);
