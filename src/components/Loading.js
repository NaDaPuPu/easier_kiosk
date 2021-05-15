import React from "react";
import "./Loading.css";

function Loading({ text, visible }) {
  if (!visible) return null;
  return (
    <div className="loading_container">
      <div className="loading_text">{text}.</div>
    </div>
  );
}

export default Loading;
