import React from "react";

const Arrow =
  (props) => {
    return (
      <svg {...props} viewBox="0 0 16 16" aria-hidden="true" height="20px" width="20px">
        <g>
          <path fillRule="evenodd" clipRule="evenodd" d="M11.146 6.854A.5.5 0 0 0 10.793 6H5.207a.5.5 0 0 0-.353.854l2.792 2.792a.5.5 0 0 0 .708 0l2.792-2.792z" />
        </g>
      </svg>
    );
  };

Arrow.defaultProps = {
  fill: "#fff",
};

export default Arrow;
