import React from "react";
import Postpage from "../../pages/postpage";

export default function posts() {
  const postList = [
    {
      title: "Child",
      url: "assets/1.png",
      size: "min",
    },
    {
      title: "Pizza",
      url: "assets/2.png",
      size: "max",
    },
    {
      title: "WallArt",
      url: "assets/3.png",
      size: "min",
    },
    {
      title: "Scooter",
      url: "assets/4.png",
      size: "max",
    },
    {
      title: "Sewing",
      url: "assets/5.png",
      size: "max",
    },
    {
      title: "Heroine",
      url: "assets/6.png",
      size: "max",
    },
    {
      title: "Food",
      url: "assets/7.png",
      size: "max",
    },
    {
      title: "Person",
      url: "assets/8.png",
      size: "max",
    },
    {
      title: "Model",
      url: "assets/9.png",
      size: "max",
    },
  ];
  return (
    <div>
      <div className="postsList">
        {postList.map((item) => (
          <Postpage item={item} />
        ))}
      </div>
    </div>
  );
}
