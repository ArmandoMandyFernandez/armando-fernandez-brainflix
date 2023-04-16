import "./Main.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import Comments from "../../components/Comments/Comments";
import NextVideos from "../../components/NextVideos/NextVideos";
import axios from "axios";

function Main() {
    const { idFromParams } = useParams();
    const [videos, setVideos] = useState([]);
    const [videoDetails, setVideoDetails] = useState(null);

    let defaultVideoId = null;

    if (videos.length > 0) {
        defaultVideoId = videos[0].id;
    }

    let videoIdToDisplay = idFromParams || defaultVideoId;

    const filteredVideos = videos.filter(
        (video) => video.id !== videoIdToDisplay
    );

    useEffect(() => {
        axios
            .get(
                "https://project-2-api.herokuapp.com/videos/?api_key=2aa1c4a6-3f46-439f-8439-d592411fdb89"
            )
            .then((response) => {
                console.log(response.data);
                setVideos(response.data);
            });
    }, []);

    useEffect(() => {
        if (videoIdToDisplay === null) {
            return;
        }
        axios
            .get(
                `https://project-2-api.herokuapp.com/videos/${videoIdToDisplay}?api_key=2aa1c4a6-3f46-439f-8439-d592411fdb89`
            )
            .then((response) => {
                console.log(response.data);
                setVideoDetails(response.data);
            });
    }, [videoIdToDisplay]);

    if (videoDetails === null) {
        return <div>LOADING...</div>;
    }

    return (
        <main className="main">
            <Hero videoDetails={videoDetails} />
            <div className="main__container">
                <div className="main__content">
                    <VideoInfo videoDetails={videoDetails} />
                    <Comments videoDetails={videoDetails} />
                </div>
                <div className="main__next-videos">
                    <NextVideos videos={filteredVideos} />
                </div>
            </div>
        </main>
    );
}

export default Main;
