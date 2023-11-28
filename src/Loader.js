import React from "react";

function Loader({ display }) {
  return (
    <span style={{ display: display }} className="loading">
      Loading...
    </span>
  );
}

export default Loader;
