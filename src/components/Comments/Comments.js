import "./Comments.scss";
import mohan from "../../assets/images/Mohan-muruge.jpg";
import commentIcon from '../../assets/images/Icons/add_comment.svg'

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
                        <label for="comment" className="comments__comment-label">
                            JOIN THE CONVERSATION
                            <textarea
                                name="comment"
                                id="comment"
                                cols="30"
                                rows="3"
                                placeholder="Add a new comment"
                                className="comments__comment-label-input"
                                required
                            ></textarea>
                        </label>
                        <button type="submit" className="comments__button">
                            <img src={commentIcon} alt="" className="comments__button-icon"/>
                            <span className="comments__button-comment">COMMENT</span>
                        </button>
                    </form>
                </div>
            </div>
            <div id="comments__list" className="comments__list"></div>
        </section>
    );
};

export default Comments;
