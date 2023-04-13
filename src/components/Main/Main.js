import "./Main.scss";
import Hero from "../Hero/Hero";
import videoDetails from "../../data/video-details.json";
import { useState, useEffect } from "react";
import VideoInfo from "../VideoInfo/VideoInfo";
import Comments from "../Comments/Comments";
import NextVideos from "../NextVideos/NextVideos";
import axios from "axios";

function Main() {
    const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);
    const [videos, setVideos] = useState([]);

    const videoClick = (videoId) => {
        const foundVideo = videoDetails.find((video) => video.id === videoId);
        setSelectedVideo(foundVideo);
    };

    useEffect(() => {
        axios
            .get(
                "https://project-2-api.herokuapp.com/videos/?api_key=2aa1c4a6-3f46-439f-8439-d592411fdb89"
            )
            .then((response) => setVideos(response.data))
            .catch((error) => console.log(error));
    }, []);


    const filteredVideos = videos.filter(
        (video) => video.id !== selectedVideo.id
    );

    return (
        <main className="main">
            <Hero selectedVideo={selectedVideo} />
            <div className="main__container">
                <div className="main__content">
                    <VideoInfo selectedVideo={selectedVideo} />
                    <Comments selectedVideo={selectedVideo} />
                </div>
                <div className="main__next-videos">
                    <NextVideos
                        clickHandler={videoClick}
                        videosLeft={filteredVideos}
                    />
                </div>
            </div>
        </main>
    );
}

export default Main;
