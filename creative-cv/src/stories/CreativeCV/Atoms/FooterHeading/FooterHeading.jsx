import React from "react";
import PropTypes from "prop-types";
import "./FooterHeading.scss";

export const FooterHeading = ({ value, ...props }) => {
  return (
    <h1 className="a-footer-heading" {...props}>
      {value}
    </h1>
  );
};

FooterHeading.propTypes = {
  value: PropTypes.string,
};

FooterHeading.defaultProps = {
  value: "Phone",
};
