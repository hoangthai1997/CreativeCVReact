import React from "react";
import PropTypes from "prop-types";
import "./Text.scss";

export const Text = ({ value, ...props }) => {
  return (
    <p className="a-text" {...props}>
      {value}
    </p>
  );
};

Text.propTypes = {
  value: PropTypes.string,
};

Text.defaultProps = {
  value:
    "I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.",
};
