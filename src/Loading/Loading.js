import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div>
      <div className="load-title"></div>
      <div className="load-small"></div>
      <div className="skeleton">
        <div className="placeholder-item"></div>
        <div className="placeholder-item"></div>
        <div className="placeholder-item"></div>
      </div>
    </div>
  );
};

export default Loading;
