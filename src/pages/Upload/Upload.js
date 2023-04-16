import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import publish from "../../assets/images/Icons/publish.svg";
import "./Upload.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

const Upload = () => {
    const [formIncomplete, setFormIncomplete] = useState(false);

    const handlePublishClick = (event) => {
        event.preventDefault();
        const titleInput = document.querySelector('#title');
        const descriptionInput = document.querySelector('#description')
        if (titleInput.value !== '' && descriptionInput.value !== ''){
            alert('Upload Complete');
            window.location.href = '/';

        } else {
            setFormIncomplete(true);
            event.preventDefault();
        }

    }
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
                                id='title'
                                required
                            />
                        </label>
                        <label htmlFor="" className="upload__form-label">
                            ADD A VIDEO DESCRIPTION
                            <input
                                type="text"
                                placeholder="Add a description to your video"
                                className="upload__form-input"
                                id="description"
                                required
                            />
                        </label>
                        {formIncomplete && <p className="upload__error-message">Both Title and Description are required!</p>}
                    </form>
                </div>
            </div>
            <div className="upload__buttons-container">
                <Link to="/" className="upload__button" onClick={handlePublishClick}>
                
                    <img
                        src={publish}
                        alt=""
                        className="upload__button-image"
                    />
                    <span className="upload__button-description">PUBLISH</span>
                
                </Link>
                <button className="upload__button-cancel">
                    <span className="upload__button-description">CANCEL</span>
                </button>
            </div>
        </section>
    );
};

export default Upload;
