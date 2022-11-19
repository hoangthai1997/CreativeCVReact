import React from "react";
import PropTypes from "prop-types";
import "./Subheading.scss";

export const Subheading = ({ value, ...props }) => {
  return (
    <h2 className="a-subheading" {...props}>
      {value}
    </h2>
  );
};

Subheading.propTypes = {
  value: PropTypes.string,
};

Subheading.defaultProps = {
  value: "A Bit About Me",
};
