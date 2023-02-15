import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/LoginForm";
import UserResisterForm from "./components/UserResisterForm";
import Users from "./components/Users";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <h1>Day-62 User Login CRUD</h1>

      <Routes>
        <Route path="/register" element={<UserResisterForm />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
