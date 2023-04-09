import './VideoCard.scss'


const VideoCard = ({clickHandler, videos}) => {
    return (
        <div className="videoCard">
            <div className="videoCard__image-container">
                <img src={videos.image} className='videoCard__image' alt="" onClick={() => clickHandler(videos.id)}/>
            </div>
            <div className="videoCard__info-container">
                <p className='videoCard__title'>{videos.title}</p>
                <p className='videoCard__channel'>{videos.channel}</p>
            </div>
        </div>
    );
};

export default VideoCard;
