import React from "react";
import "./WeekDayColumn.css";

interface weekDay {
    weekDay: String;
    date: String;
    today?: String;
}

const WeekDay = ({ weekDay, date, today }: weekDay) => {
    const itemsList = new Array(13).fill(new Array(3).fill(0));
    const isToday = today === "true" ? true : false;
    return (
        <div className="week-day-column">
            <div className={"week-day-title" + (isToday ? " isToday" : "")}>
                {weekDay + " " + date}
            </div>
            <div className="court-title-container">
                <div className="court-title">1</div>
                <div className="court-title">2</div>
                <div className="court-title">3</div>
            </div>
            <div className="blank-hours-container">
                {itemsList.map((item, index) => {
                    return (
                        <div key={index} className="blank-hour">
                            {item.map((it: number, ind: number) => {
                                return <div key={ind} className="blank-hour-court"></div>;
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default WeekDay;
