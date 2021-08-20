import React from "react";
import courtImage from "../../images/photo-court.jpeg";
import "./Accueil.css";
import ComiteCard from "./ComiteCard/ComiteCard";

const Accueil = () => {
    return (
        <div className="accueil-container">
            <div className="first-preview">
                <img className="img-court" src={courtImage} alt="Court" />
                <div className="welcome-message">Bienvenue au TENNIS CLUB de GRANGES-MARNAND</div>
                <div className="btn-join">Devenir membre</div>
            </div>
            <div className="club-presentation">
                <h2 className="presentation-header">À Propos</h2>
                <div className="presentation-body">
                    <span>
                        Notre Club a pour but de promouvoir le tennis dans notre région, de
                        développer le mouvement junior et d’organiser différentes activités durant
                        l’année. Nous vous proposons:
                    </span>
                    <ul>
                        <li>Du tennis loisir et compétition</li>
                        <li>Une école de tennis</li>
                        <li>Le bien-être par le sport</li>
                        <li>Une ambiance détendue et conviviale</li>
                    </ul>
                </div>
            </div>
            <div className="disponibilite-courts">
                <h2 className="dispo-header">Disponibilité des courts</h2>
                <div className="court-preview">
                    <div className="court-column">Court 1</div>
                    <div className="court-column">Court 2</div>
                    <div className="court-column">Court 3</div>
                </div>
            </div>
            <div className="adhesion-container">
                <h2 className="adhesion-header">Adhésion</h2>
                <div className="adhesion-table">
                    <div className="adhesion-column">Junior - ...CHF</div>
                    <div className="adhesion-column">Actif - ...CHF</div>
                    <div className="adhesion-column">Senior - ...CHF</div>
                    <div className="adhesion-column">Licence - ...CHF</div>
                </div>
                <div className="btn-fiche-inscription">Fiche d'inscription</div>
            </div>
            <div className="comite-container">
                <h2 className="comite-header">Comité</h2>
                <div className="comite-card-container">
                    <ComiteCard
                        name="Pahud Antoine"
                        description="Président"
                        email="antoinepahud@hotmail.com"
                    />
                    <ComiteCard
                        name="Gander Patrick"
                        description="Trésorier"
                        email="p.gander@praznet.ch"
                    />
                    <ComiteCard
                        name="Lechaire Claudia"
                        description="Secrétaire"
                        email="claudia.lechaire@bluewin.ch"
                    />
                    <ComiteCard
                        name="Nicod Adrien"
                        description="Responsable Interclubs"
                        email="adriennicod81@gmail.com"
                    />
                    <ComiteCard
                        name="Limond Marie"
                        description="Responsable Junior"
                        email="mlimond@bluewin.ch
"
                    />
                </div>
            </div>
        </div>
    );
};

export default Accueil;
