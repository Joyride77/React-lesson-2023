import "./App.css";
import { useEffect, useState } from "react";
import UpdateForm from "./components/UpdateForm";

function App() {
  const URL = "http://localhost:8080/users";

  const [users, setUsers] = useState([]);
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [currentData, setCurrentData] = useState({});

  useEffect(() => {
    fetchAllData();
  }, []);

  async function fetchAllData() {
    // fetch a data from localhost:8080/users
    const FETCHED_DATA = await fetch(URL); //response
    const FETCHED_JSON = await FETCHED_DATA.json(); //{status: "success", data: [{...}]}
    console.log(FETCHED_JSON);

    setUsers(FETCHED_JSON.data);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const postData = {
      username: e.target.username.value,
      age: e.target.age.value,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    };

    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);
    setUsers(FETCHED_JSON.data);
  }

  async function handleDelete(userId) {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
      }),
    };
    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUsers(FETCHED_JSON.data);
  }

  async function handleEdit(data) {
    setUsers(data);
    // setIsOpenForm(true);
  }

  return (
    <div className="App">
      <h1>Day-52 Node JS Module</h1>
      <h5>Create User Form</h5>
      <form onSubmit={handleSubmit}>
        <label name="username">
          User Name:
          <input name="username" />
        </label>
        {/* <br /> */}

        <label name="age">
          Age:
          <input name="age" />
        </label>
        {/* <br /> */}

        <button>Submit</button>
      </form>

      {users ? <UpdateForm setUsers={setUsers} /> : <div></div>}

      <h3>Users List</h3>
      {users &&
        users.map((user, index) => {
          return (
            <div key={index}>
              <p>
                {user.username} : {user.age}
              </p>
              <button onClick={() => handleEdit(user)}>Edit</button>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </div>
          );
        })}
    </div>
  );
}

export default App;
