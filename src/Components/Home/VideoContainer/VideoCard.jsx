import React from "react";

const VideoCard = ({ info }) => {

  const { snippet = {}, statistics = {} } = info || {};
  const { channelTitle,title, thumbnails } = snippet;
  const { viewCount } = statistics;
  return (
    <div className="cursor-pointer shadow-lg p-2 m-2 w-64">
      <img className="rounded-lg" src={thumbnails?.medium?.url} alt="Thumbnail" />
      <ul>
        <li className="font-semibold">{title}</li>
        <li>{channelTitle}</li>
        <li>{viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
