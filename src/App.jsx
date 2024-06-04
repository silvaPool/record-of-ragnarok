import { Switch } from "@mui/material";
import "./App.css";
import LoginButton from "./components/LoginButton";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Buda from "./pages/Buda";
import Adao from "./pages/Adao";
import Home from "./pages/Home";
import LayoutDashboard from "./pages/LayoutDashboard";

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buda" element={<Buda />} />
        <Route path="/adao" element={<Adao />} />
      </Routes> */}

      <LayoutDashboard />

    </>
  );
}

export default App;
