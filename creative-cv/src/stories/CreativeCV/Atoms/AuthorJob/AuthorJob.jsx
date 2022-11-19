import React from "react";
import PropTypes from "prop-types";
import "./AuthorJob.scss";

export const AuthorJob = ({ value, ...props }) => {
  return (
    <p className="a-author-job" {...props}>
      {value}
    </p>
  );
};

AuthorJob.propTypes = {
  value: PropTypes.string,
};

AuthorJob.defaultProps = {
  value: "Editor",
};
