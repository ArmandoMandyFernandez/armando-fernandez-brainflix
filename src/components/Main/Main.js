import "./Main.scss";
import Hero from "../Hero/Hero";
import videos from "../../data/videos.json";
import videoDetails from "../../data/video-details.json";
import { useState } from "react";
import VideoInfo from "../VideoInfo/VideoInfo";
import Comments from "../Comments/Comments";
import NextVideos from "../NextVideos/NextVideos";

function Main() {
    const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);

    const videoClick = (videoId) => {
        const foundVideo = videoDetails.find((video) => video.id === videoId);
        setSelectedVideo(foundVideo);
    };

    const filteredVideos = videos.filter(
        (video) => video.id !== selectedVideo.id
    );

    return (
        <main className="main">
            <Hero selectedVideo={selectedVideo} />
            <div className="main__container">
                <div className="main__content">
                    <VideoInfo selectedVideo={selectedVideo} />
                    <Comments
                        selectedVideo={selectedVideo}  
                    />
                </div>
                <div className="main__next-videos">
                    <NextVideos clickHandler={videoClick} videosLeft={filteredVideos}/>
                </div>
            </div>
        </main>
    );
}

export default Main;
