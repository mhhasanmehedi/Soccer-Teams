import { faFlag, faFutbol, faMapMarkerAlt, faMars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import banner from '../../banner.png';
import SocialFollow from '../SocialFollow/SocialFollow';
import './TeamDetails.css';
import maleImg from '../../male.png';
import femaleImg from '../../female.png';

const TeamDetails = () => {
    const { idTeam } = useParams();
    const [team, setTeam] = useState([]);
    const { strTeamBadge, strTeam, strCountry, strGender, intFormedYear, strSport, strDescriptionEN, strDescriptionDE } = team;

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/3/lookupteam.php?id=${idTeam}`)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]))
    }, [idTeam])

    let images;
    if(strGender == "Male"){
        images = <img src={maleImg} alt=""/>
    }
    if(strGender == "Female"){
        images = <img src={femaleImg} alt=""/>
    }

    return (
        <div className="main-detail  bg-success">
            <div className="detailBanner">
                <img className="detailBannerImg" src={banner} alt="" />
                <img className="centered" width="200px" src={strTeamBadge} alt="" />
            </div>
            <div className="container">
                <div className="row bg-warning m-1 mt-3 p-3 rounded">
                    <div className="col-md-7 pt-1">
                        <h2>{strTeam}</h2>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt}/> Founded: {intFormedYear}</p>
                        <p><FontAwesomeIcon icon={faFlag}/> Country: {strCountry}</p>
                        <p><FontAwesomeIcon icon={faFutbol}/> Sports Type: {strSport}</p>
                        <p><FontAwesomeIcon icon={faMars}/> Gender: {strGender}</p>
                    </div>
                    <div className="col-md-5 conditional-img">
                        {images}
                    </div>
                </div>
                <div className="pt-3">
                    <p>{strDescriptionEN}</p>
                    <br/>
                    <p>{strDescriptionDE}</p>
                </div>
                <SocialFollow team={team} key={idTeam}></SocialFollow>
            </div>
        </div>
    );
};

export default TeamDetails;
