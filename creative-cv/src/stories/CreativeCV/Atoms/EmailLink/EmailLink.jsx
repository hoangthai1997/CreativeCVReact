import React from "react";
import PropTypes from "prop-types";
import "./EmailLink.scss";

export const EmailLink = ({ href, value, ...props }) => {
  return (
    <a className="a-email-link" href={href} {...props}>
      {value}
    </a>
  );
};

EmailLink.propTypes = {
  href: PropTypes.string,
  value: PropTypes.string,
};

EmailLink.defaultProps = {
  href: "#",
  value: "info@mysite.com",
};
