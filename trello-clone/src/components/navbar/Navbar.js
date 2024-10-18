import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("workspace");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <div className="iconcontainer">
          <img
            src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Trello-512.png"
            alt="Trello"
            className="icon"
          />
          <span>Trello</span>
        </div>
      </div>
      {isLoggedIn ? (
        <ul className="navbar-links">
          <li onClick={() => setActiveTab("workspace")}>Workspace</li>
          <li onClick={() => setActiveTab("recent")}>Recent</li>
          <li onClick={() => setActiveTab("starred")}>Starred</li>
          <li onClick={() => setActiveTab("templates")}>Templates</li>
          <li onClick={() => setActiveTab("create")}>Create Board</li>
        </ul>
      ) : (
        <ul className="link">
          <li>
            <a href="/login" className="loginheader">Log in</a>
          </li>
          <li>
            <a href="/signup" className="Get">Get Trello for Free</a>
          </li>
        </ul>
      )}
      {isLoggedIn && (
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      )}
    </nav>
  );
};

export default Navbar;




// import React from "react";
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-logo"><div className="iconcontainer"><span><img src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Trello-512.png" alt="mmm" className="icon"></img></span>Trello</div>
//       </div>
//       <ul className="navbar-links">
//         <li>
//           <a href="/">Feature</a>
//         </li>
//         <li>
//           <a href="/about">Solution</a>
//         </li>
//         <li>
//           <a href="/services">Plain</a>
//         </li>
//         <li>
//           <a href="/contact">Pricing</a>
//         </li>
//         <li>
//           <a href="/contact">Resources</a>
//         </li>
//       </ul>
//       <ul className="link">
//         <li>
//           <a href="/login" className="loginheader">Log in</a>
//         </li>
        
//       </ul>
//       <ul className="link"><li>
//           <a href="/login" className="Get">Get Trello for free</a>
//         </li></ul>
      
//     </nav>
//   );
// };
// export default Navbar;