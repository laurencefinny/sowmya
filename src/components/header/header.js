import React from "react";
import "./header.css";
export default function header() {
  function redirect(e) {
    console.log("redirected " + e);
  }
  return (
    <div className="header">
      <img className="img-header" src="assets/logo.png" alt=""></img>
    </div>
  );
}
