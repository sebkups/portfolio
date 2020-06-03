import React from 'react'
import './App.css';
import {BrowserRouter, Link} from "react-router-dom";
import ToggleButton from "./MenuSlider/SlideDrawer/ToggleButton";
const ProfNavigation = (props) => {
    return(
        <header className="portfolio-header">
            <nav className="header-nav">
                <div className="header-toggle">
                    <ToggleButton click={props.drawcClickHandler}/>
                </div>
                <div className="header-navigation-items">
                    <ul className="header-ul">
                        <li className="header-li"><Link to="/">Start</Link></li>
                        <li className="header-li"><Link to="/portfolio">Portfolio</Link></li>
                        <li className="header-li"><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
};

export default ProfNavigation;