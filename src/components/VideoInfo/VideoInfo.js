import "./VideoInfo.scss";
import viewsIcon from "../../assets/images/Icons/views.svg";
import heartIcon from '../../assets/images/Icons/likes.svg'

const VideoInfo = ({ selectedVideo }) => {
    const { title, channel, description, views, likes, timestamp } =
        selectedVideo;
    return (
        <section className="videoInfo">
            <div className="videoInfo__title-container">
                <h1 className="videoInfo__title">{title}</h1>
            </div>
            <div className="videoInfo__stats-container">
                <div className="videoInfo__byViews-container">
                    <h3 className="videoInfo__channel">By {channel}</h3>
                    <p className="videoInfo__channel-views">
                        <img src={viewsIcon} alt="eye icon" className="videoInfo__channel-views-icon"/> {views}
                    </p>
                </div>
                <div className='videoInfo__dateLikes-container'>
                    <p className="videoInfo__date">{timestamp}</p>
                    <p className="videoInfo__likes"><img className="videoInfo__likes-icon" src={heartIcon} alt="" /> {likes}</p>
                </div>
            </div>
            <div className="videoInfo__description-container">
                <p>{description}</p>
            </div>
        </section>
    );
};

export default VideoInfo;
