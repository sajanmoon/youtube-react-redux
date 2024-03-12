import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className=" grid grid-flow-col p-2 m-2 shadow-lg">
      <div className=" flex col-span-1">
        <img
          onClick={() => handleToggleMenu()}
          className=" h-10 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
          alt="hamburger"
        />
        <img
          className=" h-9"
          src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
          alt="youtube-logo"
        />
      </div>
      <div className=" col-span-10">
        <input
          className=" w-80 border border-black rounded-l-full p-2"
          type="text"
        />
        <button className=" border border-black rounded-r-full p-2">
          Search
        </button>
      </div>
      <div className=" col-span-1">
        <img
          className=" h-10"
          src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Head;
