import "./Comments.scss";
import mohan from "../../assets/images/Mohan-muruge.jpg";
import commentIcon from "../../assets/images/Icons/add_comment.svg";
import { useState, useEffect } from "react";
import axios from "axios";

const Comments = ({selectedVideoId}) => {
    const [videoDetails, setVideoDetails] = useState(null);

    useEffect(() =>{
        if(selectedVideoId === null){
            return;
        }
        axios.get(`https://project-2-api.herokuapp.com/videos/${selectedVideoId}?api_key=2aa1c4a6-3f46-439f-8439-d592411fdb89`)
        .then((response) => {
            console.log(response.data);
            setVideoDetails(response.data);
        });
    },[selectedVideoId]);

    if(videoDetails === null){
        return <div>Loading...</div>
    }

    const { comments } = videoDetails;

    // const { comments } = selectedVideoId;



    return (
        <section className="comments">
            <h3 className="comments__header">{comments.length} Comments</h3>
            <div className="comments__container">
                <div className="comments__image-container">
                    <img src={mohan} alt="" className="comments__image-photo" />
                </div>
                <div className="comments__container-form">
                    <form action="#" className="comments__form">
                        <label
                            htmlFor="comment"
                            className="comments__comment-label"
                        >
                            JOIN THE CONVERSATION
                            <input
                                name="comment"
                                id="comment"
                                placeholder="Add a new comment"
                                className="comments__comment-label-input"
                                required
                            ></input>
                        </label>
                        <button type="submit" className="comments__button">
                            <img
                                src={commentIcon}
                                alt=""
                                className="comments__button-icon"
                            />
                            <span className="comments__button-comment">
                                COMMENT
                            </span>
                        </button>
                    </form>
                </div>
            </div>
            {comments.map((commentee) => (
                <div key={commentee.id} id="comments__list" className="comments__list">
                    <div className="comments__card">
                        <div className="comments__card-image"></div>
                        <div className="comments__card-data">
                            <div className="comments__card-name-date-container">
                                <h4 className="comments__card-name">
                                    {commentee.name}
                                </h4>
                                <p className="comments__card-date">
                                    {new Date(commentee.timestamp).toLocaleDateString('en-US',{month:'2-digit', day:'2-digit',year:'numeric'})}
                                </p>
                            </div>
                            <div className="comments__card-review-container">
                                <p className="comments__card-review">
                                    {commentee.comment}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Comments;
