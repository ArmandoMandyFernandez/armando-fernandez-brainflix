import VideoCard from "../VideosCard/VideoCard";
import "./NextVideos.scss";

const NextVideos = ({clickHandler, plants}) => {
    return (
        <section className="nextVideos">
            <h5>NEXT VIDEOS</h5>
            <VideoCard />
        </section>
    );
};

export default NextVideos;
