import React from "react";
import { NavLink } from "../../Atoms/NavLink/NavLink";
import "./NavList.scss";

export const NavList = () => {
  const navLink = ["Resume", "Projects", "Contact"];
  return (
    <ul className="m-nav-list">
      {navLink.map((links) => (
        <li key={links.toString()}>
          <NavLink value={links} />
        </li>
      ))}
    </ul>
  );
};
