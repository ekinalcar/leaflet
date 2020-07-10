import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <ul>
      <li>
        <NavLink exact to="/">
          Home
        </NavLink>
      </li>
    </ul>
  </header>
);

export default Header;
