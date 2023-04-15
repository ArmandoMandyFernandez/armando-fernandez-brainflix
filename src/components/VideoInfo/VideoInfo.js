import "./VideoInfo.scss";
import viewsIcon from "../../assets/images/Icons/views.svg";
import heartIcon from "../../assets/images/Icons/likes.svg";
import { useState, useEffect } from "react";
import axios from "axios";

const VideoInfo = ({selectedVideoId}) => {
    const [videoDetails, setVideoDetails] = useState(null);
        
    
    useEffect(() => {
        if(selectedVideoId === null){
            return;
        }
        axios
            .get(`https://project-2-api.herokuapp.com/videos/${selectedVideoId}?api_key=2aa1c4a6-3f46-439f-8439-d592411fdb89`)
            .then((response) => {
                console.log(response.data);
                setVideoDetails(response.data);
            });
    }, [selectedVideoId])

    if(videoDetails === null){
        return <div>LOADING...</div>
    }


    const { title, channel, description, views, likes, timestamp } = videoDetails;
    
    return (
        <section className="videoInfo">
            <div className="videoInfo__title-container">
                <h1 className="videoInfo__title">{title}</h1>
            </div>
            <div className="videoInfo__stats-container">
                <div className="videoInfo__byDate-container">
                    <h3 className="videoInfo__channel">By {channel}</h3>
                    <p className="videoInfo__date">{new Date(timestamp).toLocaleDateString('en-US',{month:'2-digit', day:'2-digit',year:'numeric'})}</p>
                </div>
                <div className="videoInfo__viewsLikes-container">
                    <div className="videoInfo__views-container">
                        <img
                            src={viewsIcon}
                            alt="eye icon"
                            className="videoInfo__channel-views-icon"
                        />
                        <p className="videoInfo__channel-views">{views}</p>
                    </div>
                    <div className="videoInfo__likes-container">
                        <img
                            className="videoInfo__likes-icon"
                            src={heartIcon}
                            alt=""
                        />
                        <p className="videoInfo__likes">{likes}</p>
                    </div>
                </div>
            </div>
            <div className="videoInfo__description-container">
                <p>{description}</p>
            </div>
        </section>
    );
}

export default VideoInfo;
