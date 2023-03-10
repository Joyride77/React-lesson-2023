import axios from "axios";

async function fetchAllData(URL, setUsers) {
  const FETCHED_DATA = await axios.get(URL);
  setUsers(FETCHED_DATA.data.data);
}

async function deleteUser(userId, URL, setUsers) {
  const FETCHED_DATA = await axios({
    url: URL,
    method: "DELETE",
    data: {
      userId: userId,
    },
  });
  setUsers(FETCHED_DATA.data.data);
}

async function updateUser(
  currentUser,
  URL,
  setUsers,
  setIsUpdate,
  setCurrentUser,
  newUser
) {
  const putData = {
    id: currentUser.id,
    username: currentUser.username,
    age: currentUser.age,
  };
  const FETCHED_DATA = await axios({
    url: URL,
    method: "PUT",
    data: { ...putData },
  });
  setUsers(FETCHED_DATA.data.data);
  setIsUpdate(false);
  setCurrentUser(newUser);
}

async function createUser(e, URL, setUsers) {
  const postData = {
    username: e.target.username.value,
    age: e.target.age.value,
  };
  const FETCHED_DATA = await axios({
    url: URL,
    method: "POST",
    data: { ...postData },
  });
  setUsers(FETCHED_DATA.data.data);
  console.log("fetch", FETCHED_DATA);
}

export { fetchAllData, deleteUser, updateUser, createUser };
