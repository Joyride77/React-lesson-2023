import { Route, Routes } from "react-router-dom";
import "./App.css";
import UserResisterForm from "./components/UserResisterForm";
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
      <h1>Day-62 User Login CRUD</h1>
      <h5>User Form</h5>

      <Routes>
        <Route path="/register" element={<UserResisterForm />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
