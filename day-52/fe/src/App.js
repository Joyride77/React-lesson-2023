import "./App.css";
import { useEffect, useState } from "react";
import {
  createUser,
  fetchAllData,
  deleteUser,
  updateUser,
} from "./services/axiosUsersServices";

function App() {
  const URL = "http://localhost:8080/users";
  const newUser = {
    id: "",
    username: "",
    age: "",
  };

  const [users, setUsers] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [currentUser, setCurrentUser] = useState(newUser);

  useEffect(() => {
    fetchAllData(URL, setUsers);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!isUpdate) {
      createUser(e, URL, setUsers);
    } else {
      updateUser(
        currentUser,
        URL,
        setUsers,
        setIsUpdate,
        setCurrentUser,
        newUser
      );
    }
  }

  async function handleDelete(userId) {
    deleteUser(userId, URL, setUsers);
  }

  async function handleEdit(userId) {
    setIsUpdate(true);
    const filteredUser = users.filter((user) => user.id === userId)[0];
    if (filteredUser) {
      setCurrentUser({
        id: filteredUser.id,
        age: filteredUser.age,
        username: filteredUser.username,
      });
    }
  }

  function handleUserName(e) {
    setCurrentUser({ ...currentUser, username: e.target.value });
  }
  function handleUserAge(e) {
    setCurrentUser({ ...currentUser, age: e.target.value });
  }

  return (
    <div className="App">
      <h1>Day-52 Node JS Module</h1>
      <h5>Create User Form</h5>
      <form onSubmit={handleSubmit}>
        <label name="username">
          User Name:
          <input
            name="username"
            value={currentUser.username}
            onChange={handleUserName}
          />
        </label>
        {/* <br /> */}

        <label name="age">
          Age:
          <input name="age" value={currentUser.age} onChange={handleUserAge} />
        </label>
        {/* <br /> */}

        <button>{isUpdate ? "Update" : "Submit"}</button>
      </form>

      <h3>Users List</h3>
      {users &&
        users.map((user, index) => {
          return (
            <div key={index}>
              <p>
                {user.username} : {user.age}
              </p>
              <button onClick={() => handleEdit(user.id)}>Edit</button>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </div>
          );
        })}
    </div>
  );
}

export default App;
