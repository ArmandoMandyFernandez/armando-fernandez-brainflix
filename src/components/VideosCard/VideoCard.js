import './VideoCard.scss'


const VideoCard = () => {
    return (
        <div className="nextVideos__container">
            <div className="nextVideos__image-preview"></div>
            <div className="nextVideos__preview-info">
                <p>Title</p>
                <p>Channel</p>
            </div>
        </div>
    );
};

export default VideoCard;
