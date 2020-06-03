import React from 'react';
import './App.css';
import image from '../Image/home.jpeg'
import {BrowserRouter as Router, Link} from "react-router-dom";
import ProfNavigation from './ProfNavigation'
import ProfSection from "./ProfSection";
import SlideMenu from "./MenuSlider/SlideDrawer/SlideMenu";
import Backdrop from "./MenuSlider/Backdrop/Backdrop";

class App extends React.Component{
    state = {
        sliderIsOpen: false
    }

    toggleClickHandler = () => {
        this.setState((prevState) => {
            return{
                sliderIsOpen: !prevState.sliderIsOpen
            }
        })
    };

    backDropClickHandler = () => {
        this.setState({
            sliderIsOpen: false
        })
    };

    render() {

        let backDrop;
        if (this.state.sliderIsOpen){
            backDrop=<Backdrop click={this.backDropClickHandler}/>
        }

        return (
            <Router>
                <div className="portfolio">
                    <ProfNavigation drawcClickHandler={this.toggleClickHandler}/>
                    <SlideMenu show={this.state.sliderIsOpen}/>
                    {backDrop}

                    <ProfSection />
                </div>
            </Router>
        );
    }
}
export default App;
