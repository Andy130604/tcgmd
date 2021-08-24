import express from "express";
import { addReservation, deleteReservation, getReservations } from "../controllers/controller";

const router = express.Router();

router.route("/").get(getReservations).post(addReservation).delete(deleteReservation);

export default router;
