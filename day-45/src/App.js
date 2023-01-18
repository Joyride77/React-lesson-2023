import "./App.css";
import Accordion from "./components/Accordion";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
