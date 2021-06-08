import React, { useState } from "react";

function LoadingBar() {
  return (
    <div>
      <div>
        <div className="e-loadholder">
          <div className="m-loader">
            <span className="e-text">Loading</span>
          </div>
        </div>
        <div id="particleCanvas-Blue" />
        <div id="particleCanvas-White" />
      </div>
    </div>
  );
}

export default LoadingBar;
