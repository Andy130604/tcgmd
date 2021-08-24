import React from "react";
import ReservationServices from "../../../services/reservationsServices";
import "./WeekDayColumn.css";

interface weekDay {
    weekDay: string;
    date: string;
    today?: string;
}

const WeekDay = ({ weekDay, date, today }: weekDay) => {
    const itemsList = new Array(13).fill(new Array(3).fill(0));
    const isToday = today === "true" ? true : false;

    React.useEffect(() => {
        (
            document.querySelectorAll(`.blank-hour-court.${weekDay}`) as NodeListOf<HTMLDivElement>
        ).forEach((blankHourElement) => {
            blankHourElement.addEventListener("click", () => {
                const reservation = {
                    name: "Interclubs",
                    startHour: parseInt(blankHourElement.classList[2]),
                    endHour: parseInt(blankHourElement.classList[2]) + 1,
                    date: {
                        weekDay: blankHourElement.classList[1],
                        date: "10",
                        month: "Août",
                        year: "2021",
                    },
                    description: "IC Adultes",
                    courts: {
                        court1: blankHourElement.classList[3] === "0" ? true : false,
                        court2: blankHourElement.classList[3] === "1" ? true : false,
                        court3: blankHourElement.classList[3] === "2" ? true : false,
                    },
                };
                console.log(ReservationServices.addReservation(reservation));
            });
        });
    }, [weekDay]);
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
                {itemsList.map((item: number[], index: number) => {
                    const hour = index + 8;
                    return (
                        <div key={index} className="blank-hour">
                            {item.map((it: number, ind: number) => {
                                return (
                                    <div
                                        key={(ind + 1) * (index + 1)}
                                        className={
                                            "blank-hour-court " + weekDay + " " + hour + " " + ind
                                        }
                                    ></div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default WeekDay;
