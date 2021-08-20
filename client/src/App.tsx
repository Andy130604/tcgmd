import React from "react";
import Accueil from "./components/Accueil/Accueil";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Interclubs from "./components/Interclubs/Interclubs";
import Nouvelles from "./components/Nouvelles/Nouvelles";
import Reservations from "./components/Reservations/Reservations";
import "./App.css";
import { Route } from "react-router-dom";

const App = () => {
    return (
        <>
            <Header></Header>
            <div className="body-container">
                <Route exact path="/" component={Accueil} />
                <Route exact path="/nouvelles" component={Nouvelles} />
                <Route exact path="/reservations" component={Reservations} />
                <Route exact path="/interclubs" component={Interclubs} />
                <Route exact path="/contact" component={Contact} />
            </div>
        </>
    );
};

export default App;
