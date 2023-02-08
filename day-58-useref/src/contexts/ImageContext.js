import { useState } from "react";
import { createContext } from "react";

const ImageContext = createContext(null);

const ImageContextProvider = ({ children }) => {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = !isLarge ? 100 : 150;
  return (
    <ImageContext.Provider value={[isLarge, setIsLarge, imageSize]}>
      {children}
    </ImageContext.Provider>
  );
};

export { ImageContext, ImageContextProvider };
