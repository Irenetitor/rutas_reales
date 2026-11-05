import express from "express";
import { userProfileController, getUsersController } from "../controller/user.controller.js";

const router = express.Router();

router.get("/profile", (req, res) => {
  res.status(200).send("ruta profile");
});

router.post("/profile", userProfileController);

router.get("/list", getUsersController)

export default router;
