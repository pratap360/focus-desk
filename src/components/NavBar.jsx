import React from "react";
import { useLocation,Link } from "react-router-dom";

export default function NavBar() {
  const location = useLocation;
  const currentPath = location.pathname;
  return (
    <nav className="nav-container">
      {currentPath !== '/focus' && (
        <Link to="/focus" className="nav-page">
        <button className="nav-btn">Focus</button>
      </Link>
      )}

      {currentPath !== '/task' && (
        <Link to="/task" className="nav-page">
        <button className="nav-btn">Tasks</button>
      </Link>
      )}

      {currentPath !== '/stats' && (
        <Link to="/stats" className="nav-page">
        <button className="nav-btn">Stats</button>
      </Link>
      )}

      <Link to="/" className="nav-page">
        <button className="nav-btn">logout</button>
      </Link>
    </nav>
  );
}
