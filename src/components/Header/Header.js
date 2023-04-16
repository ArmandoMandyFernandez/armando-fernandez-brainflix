import "./Header.scss";
import logo from "../../assets/images/Logo/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import upload from "../../assets/images/Icons/upload.svg";
import search from "../../assets/images/Icons/search.svg";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="navBar">
            <div className="navBar__content">
                <div className="navBar__logo-container">
                    <Link to='/'>
                        <img className="navBar__logo" src={logo} alt="the brainflix logo"/>
                    </Link>
                </div>
                <div className="navBar__functions">
                    <div className="navBar__feature-container">
                        <div className="navBar__functions-search-container">
                            <button className="navBar__functions-search-button">
                                <img
                                    src={search}
                                    alt="Search icon"
                                    className="navBar__functions-search-icon"
                                />
                            </button>
                            <input
                                type="text"
                                placeholder="Search"
                                className="navBar__functions-search"
                            />
                        </div>
                        <img
                            className="navBar__functions-avatar-1"
                            type="submit"
                            src={avatar}
                            alt="muhans famous avatar"
                        />
                    </div>
                    <Link to='upload' className="navBar__functions-button-link">
                        <button className="navBar__functions-button">
                                UPLOAD
                        </button>
                    </Link>
                    <img className="navBar__functions-avatar-2" src={avatar} alt="muhans famous avatar"/>
                </div>
            </div>
        </header>
    );
}

export default Header;
