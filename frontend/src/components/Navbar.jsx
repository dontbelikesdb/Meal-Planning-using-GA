import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: 15, background: "#eee" }}>
      <Link to="/">Home</Link> | 
      <Link to="/profile"> Profile</Link> |
      <Link to="/generate"> Generate Plan</Link>
    </nav>
  );
}
