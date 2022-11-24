import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";

//components
import Home from "./components/Home";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
      </Routes>
    </div>
  )
}
