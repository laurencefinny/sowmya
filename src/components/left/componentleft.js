import React from "react";
import { Link } from "react-router-dom";
import "./left.css";
export default function componentleft() {
  return (
    <div>
      <ol>
        <Link className="linked" to="/">
          <li>Home</li>
        </Link>

        <Link className="linked" to="/works">
          <li>Works</li>
        </Link>
        <Link className="linked" to="/potraits">
          <li>Potraits</li>
        </Link>
        <Link className="linked" to="/awards">
          <li>Awards</li>
        </Link>
        <Link className="linked" to="/posts">
          <li>Posts</li>
        </Link>
      </ol>
    </div>
  );
}
