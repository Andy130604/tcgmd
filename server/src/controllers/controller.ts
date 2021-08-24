import mongodb from "mongodb";
import ReservationDB from "../db/reservationDB";
import Reservation from "../models/reservationModel";

export const getReservations = async (req, res) => {
    const reservationsPerPage = req.query.reservationsPerPage
        ? parseInt(req.query.reservationsPerPage, 10)
        : 20;
    const page = req.query.page ? parseInt(req.query.page, 10) : 0;

    let filters = {};

    const { reservationsList, totalNumReservations } = await ReservationDB.getReservations({
        filters,
        page,
        reservationsPerPage,
    });

    const response = {
        reservations: reservationsList,
        page: page,
        filters: filters,
        entries_per_page: reservationsPerPage,
        total_results: totalNumReservations,
    };
    res.status(200).json(response);
};

export const addReservation = async (req, res) => {
    const reservation = {
        name: req.body.name,
        startHour: req.body.startHour,
        endHour: req.body.endHour,
        date: {
            weekDay: req.body.date.weekDay,
            date: req.body.date.date,
            month: req.body.date.month,
            year: req.body.date.year,
        },
        description: req.body.description,
        courts: {
            court1: req.body.courts.court1,
            court2: req.body.courts.court2,
            court3: req.body.courts.court3,
        },
    } as Reservation;

    const response = await ReservationDB.addReservation(reservation);

    res.status(201).json(response);
};

export const deleteReservation = async (req, res) => {
    const response = await ReservationDB.deleteReservation(req.body.name, req.body._id);
    res.status(202).json(response);
};
