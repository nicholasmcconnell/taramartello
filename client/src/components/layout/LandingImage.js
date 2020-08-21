import React from 'react'
import TaraName from '../../assets/images/TaraName.png';

export default function LandingImage(props) {
    return (
        <div className="landingImgContainer">
            <img className="taraImage" src={props.image} />;
        </div>
    )
}
