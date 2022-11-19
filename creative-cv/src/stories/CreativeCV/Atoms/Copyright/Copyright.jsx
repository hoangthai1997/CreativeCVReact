import React from "react";
import PropTypes from "prop-types";
import "./Copyright.scss";

export const Copyright = ({ value, ...props }) => {
  return (
    <small className="a-footer-text" {...props}>
      {value}
    </small>
  );
};

Copyright.propTypes = {
  value: PropTypes.string,
};

Copyright.defaultProps = {
  value: "© 2023 By Nicol Rider.",
};
