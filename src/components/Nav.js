import { Link } from "react-router-dom";
import GoogleBtn from "./GoogleBtn";

const Nav = () => {
    return (
        <div className="col-md-3 col-lg-2 col-xl-2 padding-0 navCol">
            <div className="navContainerCol">
                <div className="nav">
                    <button className="navButton logo">
                        <i className="bi bi-currency-bitcoin navIcon logoIcon"></i>
                        <span className="navText logoText">Crypto</span>
                    </button>
                </div>
                <GoogleBtn />
                <hr className="navLine" />
                <Link to="/" className="nav">
                    <button className="navButton">
                        <i className="bi bi-speedometer navIcon"></i>
                        <span className="navText">Dashboard</span>
                    </button>
                </Link>
                <Link to="/prices" className="nav">
                    <button className="navButton">
                        <i className="bi bi-graph-up navIcon"></i>
                        <span className="navText">Prices</span>
                    </button>
                </Link>
                <Link to="/events" className="nav">
                    <button className="navButton">
                        <i className="bi bi-calendar-check-fill navIcon"></i>
                        <span className="navText">Events</span>
                    </button>
                </Link>
                <Link to="/exchanges" className="nav">
                    <button className="navButton">
                        <i className="bi bi-shield-lock-fill navIcon"></i>
                        <span className="navText">Exchanges</span>
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Nav;