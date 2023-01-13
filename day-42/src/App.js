import "./App.css";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  function handleRegister(e) {
    console.log(e.target);
    e.preventDefault();

    const user = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      password: e.target.password.value,
    };

    setUsers([...users, user]);

    console.log(users);
  }

  return (
    <div className="App">
      <form onSubmit={handleRegister}>
        <label for="firstname">First name: </label>
        <input type="text" name="firstname" />
        <br />
        <label for="lastname">Last name: </label>
        <input type="text" name="lastname" />
        <br />
        <label for="password">Password: </label>
        <input type="password" name="password" />
        <br />
        <label for="confirmpass">Confirm Password: </label>
        <input type="password" name="confirmpass" />
        <br />
        <button name="register">Register</button>
        <br />
      </form>

      <h2>User Preview</h2>
      {users.map((u) => {
        return (
          <div>
            <div>First name: {u.firstname}</div>
            <div>Last name: {u.lastname}</div>
            <div>Password: {u.password}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
