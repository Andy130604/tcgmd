import React from "react";
import logo from "../../images/tennis-racket-logo.png";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    const handleIndicator = (element: Element) => {
        const items = document.querySelectorAll(".nav-item");
        const indicator = document.querySelector(".nav-indicator");
        items.forEach((item) => {
            item.classList.remove("is-active");
            item.removeAttribute("style");
        });
        if (indicator) {
            indicator.style.width = "".concat(element.offsetWidth, "px");
            indicator.style.left = "".concat(element.offsetLeft, "px");
            indicator.style.backgroundColor = element.getAttribute("active-color");
            element.classList.add("is-active");
            element.style.color = element.getAttribute("active-color");
        }
    };

    React.useEffect(() => {
        const currentLocation = window.location.pathname;
        const locations = ["/", "/nouvelles", "/reservations", "/interclubs", "/contact"];
        document.querySelectorAll(".nav-item").forEach((item, index) => {
            item.addEventListener("click", (e) => {
                if (e.target) {
                    handleIndicator(e.target as HTMLElement);
                }
            });
            if (currentLocation === locations[index]) {
                item.classList.add("is-active");
                handleIndicator(item);
            }
        });
    }, []);
    return (
        <div className="header-container">
            <Link
                className="header-logo-box"
                title="TC Granges-Marnand"
                to="/"
                style={{ textDecoration: "none" }}
                onClick={(e) => handleIndicator(document.querySelectorAll(".nav-item")[0])}
            >
                <img src={logo} alt="logo" className="header-logo" />
            </Link>
            <nav className="nav">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <div className="nav-item" active-color="orange">
                        Accueil
                    </div>
                </Link>
                <Link to="/nouvelles" style={{ textDecoration: "none" }}>
                    <div className="nav-item" active-color="green">
                        Nouvelles
                    </div>
                </Link>
                <Link to="/reservations" style={{ textDecoration: "none" }}>
                    <div className="nav-item" active-color="blue">
                        Réservations
                    </div>
                </Link>
                <Link to="/interclubs" style={{ textDecoration: "none" }}>
                    <div className="nav-item" active-color="red">
                        Interclubs
                    </div>
                </Link>
                <Link to="/contact" style={{ textDecoration: "none" }}>
                    <div className="nav-item" active-color="rebeccapurple">
                        Contact
                    </div>
                </Link>
                <span className="nav-indicator"></span>
            </nav>
        </div>
    );
};

export default Header;
