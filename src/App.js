import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";

//components
import StartUp from "./components/StartUp";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <StartUp /> } />
      </Routes>
    </div>
  )
}
