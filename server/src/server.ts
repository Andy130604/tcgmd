import express from "express";
import cors from "cors";
import appRoutes from "./routes/routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/reservations", appRoutes);
app.use("*", (req, res) => res.status(404).json({ error: "Not Found" }));

export default app;
