import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <h1 className="logo">CRUD</h1>
      <div className="nav-links">
        <Link to={"/"}>Home</Link>
        <Link to={"/createUser"}>CreateUser</Link>
        <Link to={"/fetchUsers"}>FetchUsers</Link>
      </div>
    </nav>
  );
};

export default Navbar;
