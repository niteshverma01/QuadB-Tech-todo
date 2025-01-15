import {Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./Context/GlobalState";

import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";

function App() {
  return (
    <GlobalProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </GlobalProvider>
  );
  
}

export default App;

