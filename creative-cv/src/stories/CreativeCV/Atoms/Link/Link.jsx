import React from "react";
import PropTypes from "prop-types";
import "./Link.scss";

export const Link = ({ href, size, value, ...props }) => {
  const mode = size ? "a-link--primary" : "a-link--secondary";
  return (
    <a
      href={href}
      className={["a-link", `a-link--${size}`, mode].join(" ")}
      {...props}
    >
      {value}
    </a>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  value: PropTypes.string.isRequired,
};

Link.defaultProps = {
  href: "#",
  size: "medium",
  value: "Resume",
};
