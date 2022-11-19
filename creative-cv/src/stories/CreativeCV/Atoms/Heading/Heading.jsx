import React from "react";
import PropTypes from "prop-types";
import "./Heading.scss";

export const Heading = ({ value, ...props }) => {
  return (
    <h1 className="a-heading" {...props}>
      {value}
    </h1>
  );
};

Heading.propTypes = {
  value: PropTypes.string,
};

Heading.defaultProps = {
  value: "Hello",
};
