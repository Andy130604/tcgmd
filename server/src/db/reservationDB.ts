import mongodb, { Collection, MongoClient, ObjectId } from "mongodb";
import Reservation from "../models/reservationModel";

let reservations: Collection | null = null;

export default class ReservationDB {
    static async injectDB(connection: MongoClient) {
        if (reservations) {
            return;
        }
        try {
            reservations = await connection.db(process.env.TCGMD_NS).collection("reservations");
        } catch (error) {
            console.error(
                `Unable to establish a collection handle in reservations Model: ${error}`,
            );
        }
    }

    static async getReservations({ filters = null, page = 0, reservationsPerPage = 20 } = {}) {
        let query, cursor;
        if (filters) {
            if ("name" in filters) {
                query = { $text: { $search: filters["name"] } };
            }
        }
        try {
            cursor = await reservations.find(query);
        } catch (e) {
            console.error(`Unable to issue find command, ${e}`);
            return { reservationsList: [], totalNumReservations: 0 };
        }

        const displayCursor = cursor.limit(reservationsPerPage).skip(reservationsPerPage * page);

        try {
            const reservationsList = await displayCursor.toArray();
            const totalNumReservations = await reservations.countDocuments(query);

            return { reservationsList, totalNumReservations };
        } catch (e) {
            console.error(`Unable to convert cursor to array or problem counting documents, ${e}`);
            return { reservationsList: [], totalNumReservations: 0 };
        }
    }

    static async addReservation(reservation: Reservation) {
        try {
            return await reservations.insertOne(reservation);
        } catch (e) {
            console.error(`Unable to post reservation: ${e}`);
            return { error: e };
        }
    }

    static async deleteReservation(name: string, reservationID?: string) {
        try {
            if (reservationID) {
                return await reservations.deleteOne({
                    _id: new ObjectId(reservationID),
                    name: name,
                });
            } else {
                return await reservations.deleteOne({
                    name: name,
                });
            }
        } catch (e) {
            console.error(`Unable to delete review: ${e}`);
            return { error: e };
        }
    }
}
