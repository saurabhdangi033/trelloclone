import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Navbar from './components/navbar/Navbar'; 
import Login from "./components/Login";
import Loginfield from "./components/watchvideo/Loginfield";
import Content from "./components/Content";
import Board from "./components/Board";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [activeTab, setActiveTab] = useState("workspace");
  return (
    <Router>
       <Navbar setActiveTab={setActiveTab} />
      <Routes>
        <Route path="/" element={<Loginfield />} />
        <Route path ="/board" element={<Board/>}/>
        {/* <Route path="/" element={<Content activeTab={activeTab} />} /> */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={isLoggedIn ? <Navigate to="/board" /> : <Login />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
