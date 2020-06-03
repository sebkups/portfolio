import React from "react";
import './SlideMenu.css';

const SlideMenu = (props) => {

    let drawerClasses = 'slide-drawer';
    if (props.show){
        drawerClasses = 'slide-drawer open';
    }


    return(
        <nav className={drawerClasses}>
            <ul>
                <li>Zupa</li>
                <li>Dupa</li>
            </ul>
        </nav>
    )
};

export default SlideMenu;