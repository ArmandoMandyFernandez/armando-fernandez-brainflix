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

// getting the list of videos
    useEffect(() => {
        axios
            .get(
                "http://localhost:8081/videos"
            )
            .then((response) => {
                setVideos(response.data);
            })
            .catch((error) => {
                console.error("Error fetching details:", error);
            });
    }, []);
    
// getting the description and comments in the videos api
    useEffect(() => {
        if (videoIdToDisplay === null) {
            return;
        }
        axios
            .get(
                `http://localhost:8081/videos/${videoIdToDisplay}`
            )
            .then((response) => {
                setVideoDetails(response.data);
            })
            .catch((error) => {
                console.error("Error fetching details:", error);
            });
    }, [videoIdToDisplay]);

    if (videoDetails === null) {
        return <div className="lds-hourglass"></div>;
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
