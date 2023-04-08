import './Hero.scss'
import play from '../../assets/images/Icons/play.svg'
import scroller from '../../assets/images/Icons/scrub.svg'
import fullScreen from '../../assets/images/Icons/fullscreen.svg'
import volume from '../../assets/images/Icons/volume_up.svg'

function Hero({selectedVideo}) {
    const {image} = selectedVideo;

return ( 
        <section className='videoHero'>
            <div className='videoHero__container'>
                <video className='videoHero__video' poster={image}></video>
            </div>
            {/* <div className='videoHero__buttons-container'>
                <img src={play} alt="play button" className='videoHero__play-button'/>
                <img src={scroller} alt="video scroller" className='videoHero__scroller'/>
                <div className='videoHero__full-volume-container'>
                    <img src={fullScreen} alt="full screen button" className='videoHero__fullScreen-button'/>
                    <img src={volume} alt="volume button" className='videoHero__volume-button'/>
                </div>
            </div> */}
        </section>

    );
}
export default Hero;