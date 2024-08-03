import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Team.css";

const Team = (props) => {
  const { strBadge, strTeam, strSport, idTeam } = props.team;
  return (
    <div className="col-md-6 col-lg-4 col-xl-3 text-center">
      <div className="single-team-box">
        <img width="80%" className="mb-3" src={strBadge} alt={strTeam} />
        <h3>{strTeam}</h3>
        <p>Sports Type: {strSport}</p>
        <Link to={`/team/${idTeam}`}>
          <button className="btn btn-warning">
            Explore{" "}
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Team;
