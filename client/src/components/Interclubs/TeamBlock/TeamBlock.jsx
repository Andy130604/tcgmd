import React from "react";
import "./TeamBlock.css";
import tennisTeamImage from "../../../images/tennis-team.jpg";

const TeamBlock = ({ name, description }) => {
    return (
        <div className="team-block">
            <div className="team-title">
                <h3>{name}</h3>
            </div>
            <div className="team-body">{description}</div>
            <div className="team-image-container">
                <img className="team-image" src={tennisTeamImage} alt="Tennis Team" />
            </div>
        </div>
    );
};

export default TeamBlock;
