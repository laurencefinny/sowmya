import React from "react";
import "../components/Posts/posts.css";
import Image from "react-bootstrap/Image";
export default function posts({ item }) {
  console.log(item.title);
  return (
    <div>
      <div>
        <h2 style={{ fontWeight: "lighter", marginTop: "10PX" }}>
          {item.title}
        </h2>
      </div>
      <div className="postsContainer">
        {item.size === "min" ? (
          <img className="postImage" src={item.url} alt={item.title}></img>
        ) : (
          <img className="postImageMax" src={item.url} alt={item.title}></img>
        )}
      </div>
    </div>
  );
}
