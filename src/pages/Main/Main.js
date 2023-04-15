import "./Main.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import Comments from "../../components/Comments/Comments";
import NextVideos from "../../components/NextVideos/NextVideos";
import axios from "axios";

function Main() {
    const {idFromParams} = useParams();
    const [videos, setVideos] = useState([]);
    
    let defaultVideoId = null;

    if(videos.length > 0) {
        defaultVideoId = videos[0].id;
    }

    let videoIdToDisplay = idFromParams || defaultVideoId;
    
    const filteredVideos = videos.filter(
        video => video.id !== videoIdToDisplay);


    useEffect(() => {
        axios
            .get(
                "https://project-2-api.herokuapp.com/videos/?api_key=2aa1c4a6-3f46-439f-8439-d592411fdb89"
            )
            .then(response => {
                console.log(response.data);
                setVideos(response.data);
            })

    }, []);


    return (
        <main className="main">
            <Hero selectedVideoId={videoIdToDisplay} />
            <div className="main__container">
                <div className="main__content">
                    <VideoInfo selectedVideoId={videoIdToDisplay} />
                    <Comments selectedVideoId={videoIdToDisplay} />
                </div>
                <div className="main__next-videos">
                    <NextVideos videos={filteredVideos} />
                </div>
            </div>
        </main>
    );
}

export default Main;
