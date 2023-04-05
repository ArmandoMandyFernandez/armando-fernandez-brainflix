import './Header.scss';
import logo from '../../assets/images/Logo/BrainFlix-logo.svg'
import avatar from '../../assets/images/Mohan-muruge.jpg'
import upload from '../../assets/images/Icons/upload.svg'

function Header(){
    return (
    <header className="navBar">
        <div className="navBar__content">
            <div className='navBar__logo-container'>
                <img className="navBar__logo" src={logo} />
            </div>
            <div className="navBar__functions">
                <input type="text" placeholder="Search" className="navBar__functions-search"></input>
                <img className="navBar__functions-avatar-1" type='submit' src={avatar} />
            <button className="navBar__functions-button">
                <img className='navBar__functions-upload-image' src={upload} />
                <span className='navBar__functions-upload'>UPLOAD</span>
            </button>
            <img className="navBar__functions-avatar-2" type='submit' src={avatar} />
            </div>
        </div>
    </header>
    )
}

export default Header