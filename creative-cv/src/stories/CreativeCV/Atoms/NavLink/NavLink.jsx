import React from "react";
import PropTypes from "prop-types";
import "./NavLink.scss";

export const NavLink = ({ href, value, ...props }) => {
  return (
    <a className="a-nav-link" href={href} {...props}>
      {value}
    </a>
  );
};

NavLink.propTypes = {
  href: PropTypes.string,
  value: PropTypes.string,
};

NavLink.defaultProps = {
  href: "#",
  value: "Resume",
};
