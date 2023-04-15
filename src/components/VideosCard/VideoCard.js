import { Link } from "react-router-dom";
import "./VideoCard.scss";

const VideoCard = ({ video }) => {
    return (
        <Link className="videoCard" to={`/videos/${video.id}`}>
            <div className="videoCard">
                <div className="videoCard__image-container">
                    <img
                        src={video.image}
                        className="videoCard__image"
                        alt=""
                    />
                </div>
                <div className="videoCard__info-container">
                    <p className="videoCard__title">{video.title}</p>
                    <p className="videoCard__channel">{video.channel}</p>
                </div>
            </div>
        </Link>
    );
};

export default VideoCard;
