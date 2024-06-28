import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./Components/MainPage";
import RegisterPage from "./Components/RegisterPage";
import StartPage from "./Components/StartPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/start" element={<StartPage />} />
    </Routes>
  );
}

export default App;
