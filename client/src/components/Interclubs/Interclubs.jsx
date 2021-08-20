import React from "react";
import "./Interclubs.css";
import TeamBlock from "./TeamBlock/TeamBlock";

const Interclubs = () => {
    return (
        <div className="interclubs-container">
            <h1>Nos différentes équipes IC et ICJ</h1>
            <div className="team-block-container">
                <TeamBlock
                    name="Actifs"
                    description="Nicod Adrien, Nicod Pascal, Rey Louis, Lebet Oscar, Lebet Léon, etc."
                />
                <TeamBlock
                    name="Juniors U18"
                    description="Nicod Adrien, Nicod Pascal, Rey Louis, Lebet Oscar, Lebet Léon, etc."
                />
                <TeamBlock
                    name="Lombardet"
                    description="Nicod Adrien, Nicod Pascal, Rey Louis, Lebet Oscar, Lebet Léon, etc."
                />
            </div>
        </div>
    );
};

export default Interclubs;
