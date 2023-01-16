import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import FeedbackForm from "./components/FeedbackForm";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Usuhuu from "./components/about/Usuhuu";
import Khangai from "./components/about/Khangai";
import NotFount from "./components/NotFount";

function App() {
  return (
    <div className="App">
      <h1>Day-43</h1>
      <div id="navbar">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
        <a href="/feedback">FeedbackForm</a>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/*" element={<About />}>
          <Route path="usuhuu" element={<Usuhuu />} />
          <Route path="khangai" element={<Khangai />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="*" element={<NotFount />} />
      </Routes>
    </div>
  );
}

export default App;
