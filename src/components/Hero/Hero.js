import './Hero.scss'

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