import React from 'react'

const VideoListItem = ({video, onVideoSelect}) => {
  const videoURL = video.snippet.thumbnails.default.url
  const videoTitle = video.snippet.title

  return (
    <li className="list-group-item" onClick={() => onVideoSelect(video)}>
      <div className="media video-list">
        <div className="media-left">
          <img className="media-object" src={videoURL} />
        </div>
        <div className="media-body">
          <div className="media-heading">{videoTitle}</div>
        </div>
      </div>
    </li>
  )
}

export default VideoListItem
