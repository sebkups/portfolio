import React from "react";
import './ToggleButton.css';

const ToggleButton = (props)=> (
    <button className="toggle-button" onClick={props.click}>Sebastian Kupś</button>
);

export default ToggleButton;