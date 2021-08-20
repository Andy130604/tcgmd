import React from "react";
import "./ComiteCard.css";
import blankProfilePicture from "../../../images/blank-profile-picture.png";
import emailIcon from "../../../images/email.png";

interface peopleCard {
    name: String;
    description: String;
    email: String;
}

const ComiteCard = ({ name, description, email }: peopleCard) => {
    return (
        <div>
            <div className="profile-card">
                <div className="profile-card-header">
                    <img
                        className="profile-picture"
                        src={blankProfilePicture}
                        alt="Blank Profile"
                    />
                </div>
                <div className="profile-card-body">
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
                <div className="profile-card-footer">
                    <a
                        className="email-icon-container"
                        href={"mailto:" + email}
                        title={"Envoyer un email à " + name}
                    >
                        <img className="email-icon" src={emailIcon} alt="Email" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ComiteCard;
