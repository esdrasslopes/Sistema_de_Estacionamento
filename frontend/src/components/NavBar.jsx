import { NavLink } from "react-router-dom";

import { useContext } from "react";

import { ParkContext } from "../context/park";

import "./NavBar.css";

const NavBar = () => {
  const { data, setData } = useContext(ParkContext);

  return (
    <nav className="navbar">
      <div className="title">
        <h1>Parkify</h1>
      </div>

      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
        {data.login && (
          <li>
            <NavLink to={"/park/form"}>Form</NavLink>
          </li>
        )}
        {data.login && (
          <li>
            <NavLink to={`admin/${data.id}`}>Admin</NavLink>
          </li>
        )}

        {!data.login && (
          <>
            <li>
              <NavLink to={"/signIN"}>Sign In</NavLink>
            </li>
            <li>
              <NavLink className="register-btn" to={"/register"}>
                Register
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
