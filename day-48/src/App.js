import "./App.css";

// import { useState } from "react";
// import Input from "./components/Input";
import Anime from "./components/Anime";
import Button from "./components/Button";
import Excises from "./components/Excises";
import ExFindEvenOdd from "./components/ExFindEvenOdd";
import Pascal from "./components/Pascal";
import TopAnime from "./components/TopAnime";

function App() {
  // const [type, setType] = useState("");

  // const handleChange = (e) => {
  //   console.log("e", e.target.value);
  //   setType(e.target.value);
  // };

  return (
    <div>
      {/* <form>
        <Input
          label="First input"
          name="first"
          type="text"
          onChange={handleChange}
          value={type}
        />
        <br />
        <Input
          label="Second input"
          name="second"
          type="text"
          onChange={handleChange}
          value={type}
        />
        <br />
      </form> */}
      {/* <Anime />
      <Button />
      <TopAnime /> */}
      {/* <Excises /> */}
      {/* <ExFindEvenOdd /> */}
      <Pascal />
    </div>
  );
}

export default App;
