import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import "./index.module.css";

import store from "./Redux/store";

import App from "./App";

createRoot(document.querySelector("#root")).render(<Provider store={store}><App/></Provider>);