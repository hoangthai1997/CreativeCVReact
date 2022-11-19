import React from "react";
import PropTypes from "prop-types";
import "./AuthorName.scss";

export const AuthorName = ({ href, value, ...props }) => {
  return (
    <a className="a-author-name" href={href} {...props}>
      {value}
    </a>
  );
};

AuthorName.propTypes = {
  href: PropTypes.string,
  value: PropTypes.string,
};

AuthorName.defaultProps = {
  href: "#",
  value: "Nicol Rider",
};
