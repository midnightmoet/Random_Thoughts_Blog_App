import React from "react";
import "./header.css";

// Header component
const Header = () => {
  return (
    <div className="header">
      {/* Header titles */}
      <div className="headerTitles">
        <span className="headerTitleSm">Compose .. Edit</span>
        <span className="headerTitleLg">Repeat</span>
      </div>
      
      {/* Header image */}
      <img
        className="headerImg"
        src="https://media.istockphoto.com/photos/top-view-of-modern-office-workspace-picture-id1205613046?b=1&k=20&m=1205613046&s=170667a&w=0&h=gijbHEL3cHTaD6YtfO_pCFLOuBX-2lshhWP4fz4mUck="
        alt="abstract-art"
      />
    </div>
  );
};

export default Header;


// Cleaned up code 1/23/24