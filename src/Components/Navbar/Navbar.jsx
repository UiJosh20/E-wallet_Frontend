import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  // Update active state whenever the location changes
  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  // Function to determine the icon color based on active state
  const getIconColor = (route) => (active === route ? "#547ee8" : "#000");

  return (
    <section className="navcon">
      <div className="navbar">
        <div className="nav-item">
          <Link to="/" onClick={() => setActive("/dashboard")}>
            <i
              className="fas fa-home"
              style={{
                color: getIconColor("/dashboard"),
                fontSize: "20px",
                paddingBottom: "5px",
              }}
            ></i>
            <div
              style={{
                backgroundColor: getIconColor("/dashboard"),
                border: active === "/dashboard" ? "3px solid #547ee8" : "none",
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
                fontSize: "20px",
                paddingBottom: "5px",
              }}
            ></i>
            <div
              style={{
                backgroundColor: getIconColor("/chart"),
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
                fontSize: "20px",
                paddingBottom: "5px",
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
                fontSize: "20px",
                paddingBottom: "5px",
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
