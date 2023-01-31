import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme/theme";
import Topbar from "./global/Topbar";
import Sidebar from "./global/Sidebar";
import Dashboard from "./pages/Dashboard";
import Management from "./pages/Management";
import Form from "./pages/Form";
import CreateProduct from "./pages/CreateProduct";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/form" element={<Form />} />
              <Route path="/management" element={<Management />} />
              <Route path="/create-product" element={<CreateProduct />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
