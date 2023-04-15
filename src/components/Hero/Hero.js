import './Hero.scss'
import { useEffect, useState } from 'react';
import axios from 'axios';

function Hero({selectedVideoId}) {
    const [videoDetails, setVideoDetails] = useState(null);

    useEffect(() => {
        if(selectedVideoId === null){
            return;
        }
        axios
            .get(`https://project-2-api.herokuapp.com/videos/${selectedVideoId}?api_key=2aa1c4a6-3f46-439f-8439-d592411fdb89`)
            .then((response) => {
                console.log(response.data);
                setVideoDetails(response.data);
            });
    }, [selectedVideoId])

    if(videoDetails === null){
        return <div>LOADING...</div>
    }



    const {image} = videoDetails;

return ( 
        <section className='videoHero'>
            <div className='videoHero__container'>
                <video className='videoHero__video' poster={image} controls></video>
            </div>
        </section>

    );
}
export default Hero;