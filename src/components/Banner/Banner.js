import React from 'react';
import banner from '../../banner.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className="position-relative text-center text-light">
            <img src={banner} className="banner-img" alt=""/>
            <h1 className="position-absolute" style={{transform:'translate(-50%, -50%)',top:'50%',left:'50%'}}>Soccer Teams</h1>
        </div>
    );
};

export default Banner;