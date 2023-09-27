import { render } from "solid-js/web";
import App from "./app";
import "./styles/index.css";
import { Router } from "@solidjs/router";

render(() => (
    <Router>
        <App />
    </Router>
) , document.body);
