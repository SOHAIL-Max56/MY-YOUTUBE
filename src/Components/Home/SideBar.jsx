import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  // Early return pattern
  if (!isMenuOpen) return null;

  return (
    <div className="p-4 m-3 col-span-1 shadow-xl">
      <div className="gap-4">
        <div className="font-semibold m-4 space-y-2">
          <p><Link to="/">Home</Link></p>
          <p><Link to="/shorts">Shorts</Link></p>
          <p><Link to="/subscriptions">Subscriptions</Link></p>
        </div>

        <div className="m-2">
          <h3 className="font-semibold">You</h3>
          <ul className="my-2 space-y-2">
            <li>History</li>
            <li>Playlist</li>
            <li>Your Videos</li>
            <li>Watch Later</li>
            <li>Liked Videos</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
