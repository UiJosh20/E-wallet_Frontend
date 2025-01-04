import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname); // Track the active route

  // Function to determine the icon color based on active state
  const getIconColor = (route) =>
    active === route ? "#547ee8" : "#000";

  return (
    <section className="navcon">
      <div className="navbar">
        <div className="nav-item">
          <Link to="/" onClick={() => setActive("/")}>
            <i
              className="fas fa-home"
              style={{
                color: getIconColor("/"),
                fontSize: "20px", // Adjust the icon size
                paddingBottom: "5px", // Space for the bottom border
              }}
            ></i>
            <div
              style={{
                backgroundColor: getIconColor("/"),
                border: active === "/" ? "3px solid #547ee8" : "none",
                borderRadius: "5px",
                width: "100%",
              }}
            ></div>
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/chart" onClick={() => setActive("/chart")}>
            <i
              className="fas fa-chart-bar"
              style={{
                color: getIconColor("/chart"),
                fontSize: "20px", // Adjust the icon size
                paddingBottom: "5px", // Space for the bottom border
              }}
            ></i>
            <div
              style={{
                backgroundColor: getIconColor("/"),
                border: active === "/chart" ? "3px solid #547ee8" : "none",
                borderRadius: "5px",
                width: "100%",
              }}
            ></div>
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/cards" onClick={() => setActive("/cards")}>
            <i
              className="fas fa-credit-card"
              style={{
                color: getIconColor("/cards"),
                fontSize: "20px", // Adjust the icon size
                paddingBottom: "5px", // Space for the bottom border
             
              }}
            ></i>
            <div
              style={{
                backgroundColor: getIconColor("/cards"),
                border: active === "/cards" ? "3px solid #547ee8" : "none",
                borderRadius: "5px",
                width: "100%",
              }}
            ></div>
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/profile" onClick={() => setActive("/profile")}>
            <i
              className="fas fa-user"
              style={{
                color: getIconColor("/profile"),
                fontSize: "20px", // Adjust the icon size
                paddingBottom: "5px", // Space for the bottom border
               
              }}
            ></i>
            <div
              style={{
                backgroundColor: getIconColor("/profile"),
                border: active === "/profile" ? "3px solid #547ee8" : "none",
                borderRadius: "5px",
                width: "100%",
              }}
            ></div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
