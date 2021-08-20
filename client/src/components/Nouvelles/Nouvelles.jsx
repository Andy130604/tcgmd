import React from "react";
import "./Nouvelles.css";
import NouvellesBlock from "./NouvellesBlock/NouvellesBlock";
import courtImage from "../../images/photo-court.jpeg";
import tennisRacket from "../../images/tennis-racket-logo.png";

const Nouvelles = () => {
    return (
        <div className="nouvelles-container">
            <h1>Nouvelles et Tournois</h1>
            <div className="nouvelles-block-container">
                <NouvellesBlock
                    title="Tournoi Junior"
                    description="Un tournoi junior se déroulera un week-end de Septembre. Tous les juniors de moins de 13 ans peuvent y participer."
                    image={courtImage}
                />
                <NouvellesBlock
                    title="Reprise des cours de tennis"
                    description="A partir de ... les cours juniors reprendront."
                    image={tennisRacket}
                />
                <NouvellesBlock />
            </div>
        </div>
    );
};

export default Nouvelles;
