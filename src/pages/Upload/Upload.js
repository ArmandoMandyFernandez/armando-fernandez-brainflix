import thumbnail from '../../assets/images/Upload-video-preview.jpg'

const Upload = () => {
    return (
        <section className="upload">
            <h1 className="upload__title">Upload Video</h1>
            <div className="upload__container">
                <div className="upload__thumbnail-container">
					<p className='upload__thumbnail-label'>Video Thumbnail</p> 
					<img src={thumbnail} alt="first person view of riding a fixie bike"  className='upload__thumbnail-image'/>
				</div>
                <div>
                    <form action="submit">
                        <label htmlFor=""> TITLE YOUR VIDEO
                            <input type="text" placeholder='Add a title to your video'/>
                        </label>
                        <label htmlFor="">ADD A VIDEO DESCRIPTION
                            <input type="text" placeholder='Add a description to your video'/>
                        </label>
                    </form>
                </div>
				<div>buttons</div>
            </div>
        </section>
    );
};

export default Upload;
