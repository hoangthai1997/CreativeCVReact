import React from "react";
import PropTypes from "prop-types";
import "./AuthorName.scss";

export const AuthorName = ({ value, ...props }) => {
  return (
    <p className="a-author-name" {...props}>
      {value}
    </p>
  );
};

AuthorName.propTypes = {
  value: PropTypes.string,
};

AuthorName.defaultProps = {
  value: "Nicol Rider",
};
