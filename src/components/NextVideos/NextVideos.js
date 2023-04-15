import VideoCard from "../VideosCard/VideoCard";
import "./NextVideos.scss";

const NextVideos = ({videos}) => {
    return (
        <section className="nextVideos">
            <h5 className="nextVideos__header">NEXT VIDEOS</h5>
            {
                videos.map(video => (
                <VideoCard key={video.id} video={video} />

                ))
            }
        </section>
    );
};

export default NextVideos;
