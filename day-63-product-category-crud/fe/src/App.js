import "./App.css";
import { Route, Routes } from "react-router-dom";
import CatergoryForm from "./components/CatergoryForm";
import Categories from "./components/Categories";

function App() {
  return (
    <div className="App">
      <h1>Day-63 Category CRUD</h1>
      <Routes>
        <Route path="/category/add" element={<CatergoryForm />} />
        <Route path="/category/list" element={<Categories />} />
        <Route path="/category/edit:id" element={null} />
        <Route path="/category/delete:id" element={null} />
      </Routes>
    </div>
  );
}

export default App;
