import React from "react";
import "./Reservations.css";
import WeekDay from "./WeekDayColumn/WeekDayColumn";

const Reservations = () => {
    return (
        <div className="reservations-container">
            <div className="reservation-header">
                <h1>Lundi 9 Août 2021 au Dimanche 15 Août 2021</h1>
            </div>
            <div className="hours-container">
                <div className="hour-display">Court</div>
                <div className="hour-display">8:00 - 9:00</div>
                <div className="hour-display">9:00 - 10:00</div>
                <div className="hour-display">10:00 - 11:00</div>
                <div className="hour-display">11:00 - 12:00</div>
                <div className="hour-display">12:00 - 13:00</div>
                <div className="hour-display">13:00 - 14:00</div>
                <div className="hour-display">14:00 - 15:00</div>
                <div className="hour-display">15:00 - 16:00</div>
                <div className="hour-display">16:00 - 17:00</div>
                <div className="hour-display">17:00 - 18:00</div>
                <div className="hour-display">18:00 - 19:00</div>
                <div className="hour-display">19:00 - 20:00</div>
                <div className="hour-display">20:00 - 21:00</div>
            </div>
            <div className="week-days-container">
                <WeekDay weekDay="Lundi" date="9" />
                <WeekDay weekDay="Mardi" date="10" />
                <WeekDay weekDay="Mercredi" date="11" />
                <WeekDay weekDay="Jeudi" date="12" />
                <WeekDay weekDay="Vendredi" date="13" />
                <WeekDay weekDay="Samedi" date="14" today="true" />
                <WeekDay weekDay="Dimanche" date="15" />
            </div>
        </div>
    );
};

export default Reservations;
