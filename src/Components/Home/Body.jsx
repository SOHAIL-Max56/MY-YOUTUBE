import React from "react";
import VideoContainer from "./VideoContainer";
import SideBar from "./SideBar";

const Body = () => {
  return (
    <div className="grid grid-flow-col">
      {/*         Header
                NavBar
            Body
                SideBar
                VideoContainer
            Footer
            */}

      <SideBar />
      <VideoContainer />
      <h3>Body</h3>
    </div>
  );
};

export default Body;
