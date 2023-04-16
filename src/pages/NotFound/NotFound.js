import { useNavigate } from 'react-router-dom';
import fourOhFour from '../../assets/images/—Pngtree—404 error page_1362453.png';
import "./NotFound.scss"

const NotFound = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/');
    }

    return(
    <section>
        <img src={fourOhFour} alt="404 page logo" />
        <button onClick={handleClick} className='return'>Return to home</button>
    </section>
    )
};

export default NotFound;
