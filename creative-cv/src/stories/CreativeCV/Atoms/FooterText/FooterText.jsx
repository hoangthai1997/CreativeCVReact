import React from "react";
import PropTypes from "prop-types";
import "./FooterText.scss";

export const FooterText = ({ value, ...props }) => {
  return (
    <p className="a-footer-text" {...props}>
      {value}
    </p>
  );
};

FooterText.propTypes = {
  value: PropTypes.string,
};

FooterText.defaultProps = {
  value: "123-456-7890",
};
