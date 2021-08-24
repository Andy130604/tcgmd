import { ObjectId } from "mongodb";

export default interface Reservation {
    name: string;
    startHour: number;
    endHour: number;
    date: {
        weekDay: string;
        date: string;
        month: string;
        year: string;
    };
    description: string;
    courts: {
        court1: boolean;
        court2: boolean;
        court3: boolean;
    };
    _id?: ObjectId;
}
