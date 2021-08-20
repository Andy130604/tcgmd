import express from "express";
import { sendMessage } from "../controllers/controller";

const router = express.Router();

router.route("/").get(sendMessage);

export default router;
