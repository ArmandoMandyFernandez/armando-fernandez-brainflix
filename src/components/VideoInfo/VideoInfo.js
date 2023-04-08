import './VideoInfo.scss'

const VideoInfo = ({selectedVideo}) => {

    const {title, channel, description, videws,likes, timestamp} = selectedVideo;
    return ( 
        <section className="videoInfo">
            <div className="videoInfo__title-container">
                <h2 className="videoInfo__title">{title}</h2>
            </div>
        
        </section>

     );
}
 
export default VideoInfo;