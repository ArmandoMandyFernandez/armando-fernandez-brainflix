import { Link } from "react-router-dom";
import "./VideoCard.scss";

const VideoCard = ({ video }) => {
    return (
        <Link className="videoCard" to={`/videos/${video.id}`}>
            <div className="videoCard">
                <div className="videoCard__image-container">
                    <img
                        src={"http://localhost:8081/videos/" + video.image} 
                        className="videoCard__image"
                        alt={video.title}
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
