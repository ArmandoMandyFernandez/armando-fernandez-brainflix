import "./VideoInfo.scss";
import viewsIcon from "../../assets/images/Icons/views.svg";
import heartIcon from "../../assets/images/Icons/likes.svg";

const VideoInfo = ({ selectedVideo }) => {
    const { title, channel, description, views, likes, timestamp } =
        selectedVideo;
    
    return (
        <section className="videoInfo">
            <div className="videoInfo__title-container">
                <h1 className="videoInfo__title">{title}</h1>
            </div>
            <div className="videoInfo__stats-container">
                <div className="videoInfo__byDate-container">
                    <h3 className="videoInfo__channel">By {channel}</h3>
                    <p className="videoInfo__date">{timestamp}</p>
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
};

export default VideoInfo;
