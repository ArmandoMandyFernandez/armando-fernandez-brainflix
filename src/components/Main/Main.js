import "./Main.scss";
import Hero from "../Hero/Hero";
import videos from "../../data/videos.json";
import videoDetails from "../../data/video-details.json";
import { useState } from "react";
import VideoInfo from "../VideoInfo/VideoInfo";
import Comments from "../Comments/Comments";

function Main() {
    const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);

    const videoClick = (videoId) => {
        const foundVideo = videoDetails.find((video) => video.id === videoId);
        setSelectedVideo(videoClick);
    };

    const filteredVideos = videos.filter(
        (video) => video.id !== selectedVideo.id
    );

    return (
        <main className="main">
            <Hero selectedVideo={selectedVideo} />
            <VideoInfo selectedVideo={selectedVideo} />
            <Comments selectedVideo={selectedVideo} />
        </main>
    );
}

export default Main;
