import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import publish from "../../assets/images/Icons/publish.svg";
import "./Upload.scss";

const Upload = () => {
    return (
        <section className="upload">
            <h1 className="upload__title">Upload Video</h1>
            <h4 className="upload__thumbnail-label">VIDEO THUMBNAIL</h4>
            <div className="upload__container">
                <div className="upload__thumbnail-image-container">
                    <img
                        src={thumbnail}
                        alt="first person view of riding a fixie bike"
                        className="upload__thumbnail-image"
                    />
                </div>
                <div className="upload__form-container">
                    <form action="submit" className="upload__form">
                        <label htmlFor="" className="upload__form-label">
                            {" "}
                            TITLE YOUR VIDEO
                            <input
                                type="text"
                                placeholder="Add a title to your video"
                                className="upload__form-input"
                            />
                        </label>
                        <label htmlFor="" className="upload__form-label">
                            ADD A VIDEO DESCRIPTION
                            <input
                                type="text"
                                placeholder="Add a description to your video"
                                className="upload__form-input"
                            />
                        </label>
                    </form>
                </div>
            </div>
            <div className="upload__buttons-container">
                <button className="upload__button">
                    <img
                        src={publish}
                        alt=""
                        className="upload__button-image"
                    />
                    <span className="upload__button-description">PUBLISH</span>
                </button>
                <button className="upload__button-cancel">
                    <span className="upload__button-description">CANCEL</span>
                </button>
            </div>
        </section>
    );
};

export default Upload;
