import React from "react";
// import the link component
import { Link } from "react-router-dom";
// Create the header component
const Header = () => {
  return (
    <header className="app-header flex-container">
      <h2 className="text-primary">Speed</h2>
      <ul className="nav-links flex-container">
        {/* Add the links components
            this link will take the user to the main page  */}
        <Link className="link" to="/">
          Home
        </Link>
        {/* this link will take the user to the add car page */}
        <Link className="link" to="/addCar">
          Add Car
        </Link>
        {/* this link will take the user to the about page */}
        <Link className="link" to="/About">
          About
        </Link>
      </ul>
    </header>
  );
};

export default Header;
