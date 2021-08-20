import React from "react";
import "./NouvellesBlock.css";

const NouvellesBlock = ({ title, description, image }) => {
    return (
        <div className="nouvelles-block">
            <h2 className="block-title">{title}</h2>
            <div className="block-body">{description}</div>
            <div className="block-img-container">
                <img className="block-img" src={image} alt="Block" />
            </div>
        </div>
    );
};

export default NouvellesBlock;
