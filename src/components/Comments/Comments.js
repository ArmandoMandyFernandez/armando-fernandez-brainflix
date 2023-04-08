import "./Comments.scss";
import mohan from "../../assets/images/Mohan-muruge.jpg";
import commentIcon from "../../assets/images/Icons/add_comment.svg";

const Comments = ({ selectedVideo }) => {
    const { comments } = selectedVideo;

    return (
        <section className="comments">
            <h3 className="comments__header">3 Comments</h3>
            <div className="comments__container">
                <div className="comments__image-container">
                    <img src={mohan} alt="" className="comments__image-photo" />
                </div>
                <div className="comments__container-form">
                    <form action="#" className="comments__form">
                        <label
                            for="comment"
                            className="comments__comment-label"
                        >
                            JOIN THE CONVERSATION
                            <textarea
                                name="comment"
                                id="comment"
                                placeholder="Add a new comment"
                                className="comments__comment-label-input"
                                required
                            ></textarea>
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
            <div id="comments__list" className="comments__list">
                <div className="comments__card">
                    <div className="comments__card-image"></div>

                    {comments.map((commentee) => (
                        <div className="comments__card-data">
                            <div className="comments__card-name-date-container">
                                <h4 className="comments__card-name">{commentee.name}</h4>
                                <p className="comments__card-date">
                                    {commentee.timestamp}
                                </p>
                            </div>
                            <div className="comments__card-review-container">
                                <p className="comments__card-review">
                                    {commentee.comment}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Comments;
