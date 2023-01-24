import "./App.css";
import React, { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [isFancy, setIsFancy] = useState(false);
  return (
    <div className="App">
      {isFancy ? <Counter isFancy={true} /> : <Counter isFancy={false} />}
      <label>
        <input
          type="checkbox"
          checked={isFancy}
          onChange={(e) => {
            setIsFancy(e.target.checked);
            console.log("e", e);
          }}
        />
        Use fancy styling
      </label>
    </div>
  );
}

export default App;
