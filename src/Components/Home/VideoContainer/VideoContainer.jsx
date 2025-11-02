import React, { useEffect, useState } from "react";
import { YouTube_Video_API } from "../../utils/Constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [video, setVideo] = useState([]);
  useEffect(() => {
    // Fetch video data or perform any setup
    getVideoData();
  }, []);
  const getVideoData = async () => {
    const data = await fetch(YouTube_Video_API);
    const json = await data.json();
    setVideo(json.items);
  };
  return (
    <div className="flex flex-wrap">
      {video.map((videoData) => (
        <Link to={"/watch?v=" + videoData.id} key={videoData.id}>
          <VideoCard info={videoData} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
