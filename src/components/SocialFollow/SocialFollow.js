import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SocialFollow.css';

const SocialFollow = (props) => {
    const { strFacebook, strTwitter, strYoutube, strInstagram} = props.team;
    return (
        <div className="d-flex justify-content-center align-item-center social-link">
            <a href={`//${strTwitter}`} target="_blank"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
            <a href={`//${strFacebook}`} target="_blank"><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></a>
            <a href={`//${strYoutube}`} target="_blank"><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></a>
            <a href={`//${strInstagram}`} target="_blank"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
        </div>
    );
};

export default SocialFollow;