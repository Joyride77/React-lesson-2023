import axios from "axios";

async function fetchAllData(URL, setUser) {
  const FETCHED_DATA = await axios.get(URL);
  setUser(FETCHED_DATA.data.data);
}

async function deleteUser(userId, URL, setUser) {
  const FETCHED_DATA = await axios({
    url: URL,
    method: "DELETE",
    data: {
      userId: userId,
    },
  });
  setUser(FETCHED_DATA.data.data);
}

async function createUser(e, URL, setUser) {
  e.preventDefault();
  const postData = {
    firstName: e.target.firstName.value,
    lastName: e.target.lastName.value,
    phoneNumber: e.target.phoneNumber.value,
    email: e.target.email.value,
    description: e.target.description.value,
    // role: e.target.role,
    password: e.target.password.value,
  };
  const FETCHED_DATA = await axios({
    url: URL,
    method: "POST",
    data: { ...postData },
  });
  setUser(FETCHED_DATA.data.data);
}

async function updateUser(currentUser, URL, setUser) {
  const putData = {
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    phoneNumber: currentUser.phoneNumber,
    email: currentUser.email,
    description: currentUser.description,
    // role: currentUser.role,
    password: currentUser.password,
  };
  const FETCHED_DATA = await axios({
    url: URL,
    method: "PUT",
    data: { ...putData },
  });
  setUser(FETCHED_DATA.data.data);
}

export { fetchAllData, createUser, updateUser, deleteUser };
