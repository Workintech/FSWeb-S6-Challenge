// This is for the fake API. Do not delete!
import React from "react";
import { createRoot } from "react-dom/client";
import { worker } from "./mocks/browser";
import 'bootstrap/dist/css/bootstrap.min.css';

import App from "./App";
import "./index.css";
import "./App.css";

worker.start();

const container = document.getElementById("root");
const root = createRoot(container)
root.render(<App />);
