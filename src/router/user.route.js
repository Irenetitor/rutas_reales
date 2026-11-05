import express from "express";
import { userProfileController, getUsersController } from "../controller/user.controller.js";

const router = express.Router();

router.post("/profile", userProfileController);

router.get("/list", getUsersController)

export default router;
