import React from "react";
import PropTypes from "prop-types";

const Error = ({ error }) => {
  return (
    <div className="error">
      <p>This is a danger alert—check it out!</p>
    </div>
  );
};

Error.propTypes = {
  error: PropTypes.string.isRequired
};

export default Error;
