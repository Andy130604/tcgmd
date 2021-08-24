import app from "./server";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import ReservationsModel from "./models/reservationModel";
import ReservationDB from "./db/reservationDB";

dotenv.config();

const port = process.env.PORT || 8000;
const uri = process.env.TCGMD_DB_URI;

const client = new MongoClient(uri);

client
    .connect()
    .catch((error) => {
        console.error(error.stack);
        process.exit(1);
    })
    .then(async (connection) => {
        ReservationDB.injectDB(connection);
        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        });
    });
