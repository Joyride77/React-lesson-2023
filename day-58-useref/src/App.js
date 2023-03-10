import "./App.css";
import { useState } from "react";
import List from "./components/List";
import { ImageContext, ImageContextProvider } from "./contexts/ImageContext";
import { useContext } from "react";
import StopWatch from "./components/StopWatch";
import InputFocus from "./components/InputFocus";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  // const [isLarge, setIsLarge, imageSize] = useContext(ImageContext);

  return (
    <div className="App">
      <StopWatch />
      <InputFocus />
      <VideoPlayer />
      {/* <label>
        Use large images
        <input
          type="checkbox"
          checked={isLarge}
          onChange={(e) => setIsLarge(e.target.checked)}
        />
      </label>
      <List imageSize={imageSize} /> */}
    </div>
  );
}

export default App;
