import React, { useState, useEffect } from "react";
////API KEY - AIzaSyDf5EAIn6-wOikQvQza1GlDs_dsr_nE-U8
////Apple channel ID - UCE_M8A5yxnLfW0KghEeajjw

////To get channel ID
//https:www.googleapis.com/youtube/v3/channels?key=AIzaSyDf5EAIn6-wOikQvQza1GlDs_dsr_nE-U8&forUsername=Apple&part=id

////To get JSON data, the latest 8 videos
//https:www.googleapis.com/youtube/v3/search?key=AIzaSyDf5EAIn6-wOikQvQza1GlDs_dsr_nE-U8&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=8

function YoutubeVideos() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch(
      `https:www.googleapis.com/youtube/v3/search?key=AIzaSyDf5EAIn6-wOikQvQza1GlDs_dsr_nE-U8&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=8`
    )
      .then((response) => response.json())
      .then((data) => {
        const youtubeVideos = data.items;
        setVideos(youtubeVideos);
        console.log(youtubeVideos);
      });
  }, []);
  return (
    <section className="youtubeVideosWrapper">
      <div className="allVideosWrapper">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper">
                Latest Videos <br />
                <br />
              </div>
            </div>

            {videos?.map((singleVideo, i) => {
              let vidId = singleVideo.id.videoId;
              let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
              let videoWrapper = (
                <div key={i} className="col-sm-12 col-md-6">
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a href={vidLink} target="_blank" rel="noreferrer">
                        <img
                          src={singleVideo.snippet.thumbnails.high.url}
                          alt="thumbnails"
                        />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        <a href={vidLink} target="_blank" rel="noreferrer">
                          {singleVideo.snippet.title}
                        </a>
                      </div>
                      <div className="videoDesc">
                        {singleVideo.snippet.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
              return videoWrapper;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default YoutubeVideos;
