import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminLogin from "./pages/AdminLogin";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
