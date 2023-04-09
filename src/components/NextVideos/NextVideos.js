import VideoCard from "../VideosCard/VideoCard";
import "./NextVideos.scss";

const NextVideos = ({clickHandler, videosLeft}) => {
    return (
        <section className="nextVideos">
            <h5 className="nextVideos__header">NEXT VIDEOS</h5>
            {
                videosLeft.map(videos => (
                <VideoCard key={videos.id} videos={videos} clickHandler={clickHandler}/>

                ))
            }
        </section>
    );
};

export default NextVideos;
