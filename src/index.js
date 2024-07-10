import React from "react";
import App from "./components/App";

import "./App.css";
import { createRoot } from 'react-dom/client';
const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);
