import React from 'react';

import './InfoBar.css';
import closeIcon from '../../Icons/closeIcon.png';
import onlineIcon from '../../Icons/onlineIcon.png';

const InfoBar = ({room}) =>{
    return (
    <div className="infoBar">
        <div className="leftInnerContainer">
            <img className="onlineIcon" src={onlineIcon} alt="" />
            <h3>{room}</h3>
        </div>

        <div className="rightInnerContainer">
            <a href="/"> <img src={closeIcon} alt=""  /></a>
        </div>
    </div>
    )
}
export default InfoBar;