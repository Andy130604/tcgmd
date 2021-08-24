import http from "./reservationsApi";

export default class ReservationServices {
    static getAllReservations() {
        return http.get("/");
    }

    static addReservation(data: object) {
        return http.post("/", data);
    }
}
