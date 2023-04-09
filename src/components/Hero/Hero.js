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
                <video className='videoHero__video' poster={image} controls></video>
            </div>
        </section>

    );
}
export default Hero;