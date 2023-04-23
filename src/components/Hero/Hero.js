import './Hero.scss'


function Hero({videoDetails}) {


return ( 
        <section className='videoHero'>
            <div className='videoHero__container'>
                <video className='videoHero__video' poster={"http://localhost:8081/videos/" + videoDetails.image} controls></video>
            </div>
        </section>

    );
}
export default Hero;