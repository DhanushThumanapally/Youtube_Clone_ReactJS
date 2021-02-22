import React, { useState, useEffect } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";

const Header = ({ FromChildToParent }) => {
  const [input, setInput] = useState("");
  const handleClick = () => {
    FromChildToParent(input);
  };
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <img
          className="header__logo"
          src="https://www.seekpng.com/png/detail/12-129835_2000px-youtube-social-red-circle-youtube-logo-circle.png"
          alt="youtube-logo"
        />
      </div>
      <div className="header__input">
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="Search"
        />
        <SearchIcon onClick={handleClick} className="header__inputButton" />
      </div>
      <div className="header__icons">
        <AppsIcon className="header__icon" />
        <VideoCallIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          className="header__icon"
          src="https://photos.angel.co/users/12394056-medium_jpg?1610981486"
          alt="img"
        />
      </div>
    </div>
  );
};

export default Header;
