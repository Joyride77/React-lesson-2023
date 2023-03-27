import { createContext, useEffect, useState } from "react";

const NeighborhoodContext = createContext(null);

const NeighborhoodContextProvider = ({ children }) => {
  const ALL_NEIGHBORHOOD_URL = "http://localhost:8080/neighborhood/list";
  const [neighborhood, setNeighborhood] = useState([]);

  async function fetchNeighborhood(url) {
    const FETCHED_DATA = await fetch(url);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setNeighborhood(FETCHED_JSON.data);
  }
  useEffect(() => {
    fetchNeighborhood(ALL_NEIGHBORHOOD_URL);
  }, []);

  return (
    <NeighborhoodContext.Provider value={neighborhood}>
      {children}
    </NeighborhoodContext.Provider>
  );
};

export { NeighborhoodContext, NeighborhoodContextProvider };
