import React, { useEffect } from "react";
import { YouTube_Video_API } from "../utils/Constant";

const VideoContainer = () => {
  useEffect(() => {
    // Fetch video data or perform any setup
    getVideoData();
  }, []);
  const getVideoData = async () => {
    const data = await fetch(YouTube_Video_API);
    const json = await data.json();
    console.log(json);
  };
  return (
    <div className="">
      <h3>Video Title</h3>
    </div>
  );
};

export default VideoContainer;
