import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className=" p-5 shadow-lg w-48">
      <h1 className=" font-bold">Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Sport</li>
        <li>Movies</li>
        <li>News</li>
      </ul>
      <h1 className=" font-bold pt-5">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sport</li>
        <li>Movies</li>
        <li>News</li>
      </ul>
    </div>
  );
};

export default SideBar;
