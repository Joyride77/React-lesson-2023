import "./App.css";
import { Route, Routes } from "react-router-dom";
import CatergoryForm from "./components/CatergoryForm";
import Categories from "./components/Categories";
import { ToastContainer } from "react-toastify";
import CategoryEditForm from "./components/CategoryEditForm";

function App() {
  return (
    <div className="App">
      <h1>Day-63 Category CRUD</h1>
      <Routes>
        <Route path="/category/add" element={<CatergoryForm />} />
        <Route path="/category/list" element={<Categories />} />
        <Route path="/category/edit/:id" element={<CategoryEditForm />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
