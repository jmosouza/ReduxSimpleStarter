import React from 'react'

const VideoDetail = ({video}) => {
  if (!video) return (
    <div className="col-md-8">
      Loading...
    </div>
  )

  const title = video.snippet.title
  const description = video.snippet.description
  const url = `https://www.youtube.com/embed/${video.id.videoId}`

  return (
    <div className="col-md-8 video-detail">
      <div className="embed-responsive-container-16-by-9">
        <iframe src={url} className="embed-responsive-item"></iframe>
      </div>
      <div className="details">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default VideoDetail
