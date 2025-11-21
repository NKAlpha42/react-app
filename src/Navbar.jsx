import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="/Home">Home</a>
        </li>
        <li>
          <a href="/Popular">Popular</a>
        </li>
        <li>
          <a href="/Rated">Top Rated</a>
        </li>
        <li>
          <a href="/Snacks">Concession</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
